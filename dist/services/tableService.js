/**
 * 桌位服务模块
 * 负责桌位的增删改查、状态管理、密码验证以及用户（游客/会员）加入桌位的权限控制逻辑
 */
const { appState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')
const { logger } = require('../utils/logger.js')
const { TableStatus } = require('../model/TableStatus.js')
const db = require('../filedb.js');

/**
 * 添加新桌位
 * @param {Object} tableData 桌位数据
 * @returns {Object} 包含操作结果和桌位数据的对象
 */
function addNewTable(tableData) {
  try {
    if (!tableData || tableData.id === undefined) {
      throw new Error("无效的桌位数据")
    }

    const newId = String(tableData.id)
    if (!newId) { throw new Error("无效的桌位ID") }
    // 检查是否有重复 ID
    const exists = appState.tables.getTableById(newId)
    if (exists) {
      throw new Error("该桌位已存在")
    }

    // 添加桌子到全局状态
    appState.tables.addTable(tableData)

    // 按 ID 排序
    appState.tables.sortById()

    const res = appState.tables.getTableById(newId)
    if (!res) throw new Error("无法获取已添加的桌位信息")
    return { success: true, data: res.toJSON() };
  } catch (err) {
    console.warn("Error: ", err.message)
    return { success: false, message: err.message };
  }
}

/**
 * 桌位登录逻辑 (客户端扫码后的首次密码验证)
 * @param {Object} io Socket.io 实例
 */
function tableLogin(io) {
  io.on("client_login", (value, cb) => {
    try {
      const id = value.table
      const tablePass = tablesPassword.tables.get(id)
      if (!tablePass) {
        throw new Error("密码系统中未找到该桌位")
      }
      const res = tablePass.checkPassword(value.password)
      
      if (res) {
         const table = appState.tables.getTableById(id)
         // 如果桌位处于空闲状态，则更新为已就座
         if (table && table.status === TableStatus.FREE) {
            table.status = TableStatus.SEATED
            db.saveAppStateData(appState) // 持久化状态
            io.emit(`client_table${id}`, table.toJSON()) // 通知所有客户端该桌位状态更新
         }
      }
      cb(res)
    } catch (error) {
      console.warn("Error: ", error.message)
      cb({ success: false, message: error.message })
    }
  })
}

/**
 * 更新桌位密码
 */
function updateTablePassword(io) {
  io.on("table_password_update", (value, cb) => {
    try {
      const id = value.tableId
      const password = value.password
      tablesPassword.changePassword(id, password)
      cb(tablesPassword.toJSON())
    } catch (e) {
      console.warn("Error: ", e.messsage)
      cb({ success: false, message: e.message });
    }
  })
}

/**
 * 刷新并重新生成桌位随机密码
 */
function refreshTablePassword(io) {
  io.on('table_password_refresh', (id, cb) => {
    try {
      const res = tablesPassword.makePassword(id)
      cb(res)
    } catch (e) {
      console.warn("Error: ", e)
      cb({ success: false, message: e.message });
    }
  })
}

/**
 * 更新桌位信息（不包含订单，通常用于管理端修改桌号、区域或手动切换状态）
 */
function updateTableWithoutOrder(tableData) {
  try {
    if (!tableData || tableData.id === undefined) throw new Error("无效的桌位数据")
    if (tableData.status === null || tableData.status === undefined) throw new Error("无效的桌位状态")
    const id = tableData.id

    const tableObj = appState.tables.getTableById(id)
    if (!tableObj) throw new Error(`未找到桌位 ${id}`)
    
    const oldStatus = tableObj.status.value

    // 更新服务器状态
    appState.tables.updateTableWithoutOrder(tableData)

    const updatedTable = appState.tables.getTableById(id)
    if (!updatedTable) throw new Error(`更新后桌位 ${id} 消失`)
    const newStatus = updatedTable.status.value

    // 如果状态从 "已支付" 变为 "空闲"，则自动执行清空桌子逻辑（重置用户、订单、呼叫信息等）
    if (oldStatus === '已支付' && newStatus === '空闲') {
      const cleanRes = cleanTable(id)
      logger.info(`自动清除桌子 桌号 - ${id}`)
      if (!cleanRes.success) throw new Error("清除桌位失败")
    }

    const table = appState.tables.getTableById(id)
    return { success: true, data: table.toJSON() }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, message: error.message }
  }
}

/**
 * 删除桌位
 */
function removeTable(id) {
  try {
    // 从全局状态中移除
    const res = appState.tables.removeTable(id)

    if (!res) throw new Error('删除桌位失败')

    return { success: true, tables: true }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, message: error.message }
  }
}

/**
 * 清空桌位逻辑（翻台）
 * 重置桌位所有状态：清除订单、重置呼叫、清除当前关联的所有用户
 */
function cleanTable(id) {
  try {
    logger.info(`清除桌子-${id}`)

    const table = appState.tables.getTableById(id)

    if (table == null) throw new Error("未找到该桌位")
    
    // 调用 table 对象的 clearTable 方法
    table.clearTable()

    // 幽灵订单检查：确保订单数组已被清空
    if (table.order.length > 0) {
      logger.error(`[GhostOrderCheck] 桌位 ${id} clearTable 失败! 订单仍存留: ${table.order.length}`)
    } else {
      logger.info(`[GhostOrderCheck] 桌位 ${id} 清除成功。`)
    }
    
    // 检查全局订单映射（仅用于调试/验证）
    const globalOrders = appState.getOrdersByTableID(id);
    if (globalOrders && globalOrders.length > 0) {
       logger.warn(`[GhostOrderCheck] 桌位 ${id} 已清除，但 appState.orders 仍有 ${globalOrders.length} 条记录 (历史或幽灵数据?)`)
    }

    const cleanedTable = appState.tables.getTableById(id)
    if (cleanedTable.status !== TableStatus.FREE) throw new Error('清除桌位状态失败')

    return { success: true, data: cleanedTable.toJSON() }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, message: error.message }
  }
}

/**
 * 根据 ID 获取桌位信息
 */
function getTableById(id) {
  try {
    if (id === undefined || id === null || id === "") throw new Error("无效的输入参数")
    const table = appState.getTableById(id)
    if (!table) throw new Error('未找到该桌位')
    return { success: true, data: table.toJSON() }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, message: error.message }
  }
}

/**
 * 处理客户端发送的命令（如加菜、减菜、清空购物车等）
 * @param {string} id 桌位 ID
 * @param {Object} cmd 命令对象
 */
function clientCmd(id,cmd) {
  try {
    const table = appState.tables.getTableById(id)

    if (table == null) throw new Error("未找到该桌位")
    // 只有已就座的桌位允许发送客户端命令
    if (table.status !== TableStatus.SEATED) {
            throw new Error(`桌位 ${id} 无操作权限`)
        }

    const result = table.clientCmd(cmd);

    if(!result[cmd.cmd]) throw new Error("更新失败")
    return {success: true, data: result }

  } catch (error) {
    console.warn("Error: ", error.message)
    return {success:false, message: error.message}
  }
}

/**
 * 处理客户端点击消息（如呼叫服务员等）
 */
function clickMsg(id,cmd)
{
  try {
    const table = appState.tables.getTableById(id)

    if (table == null) throw new Error("未找到该桌位")
    table.clickMsg(cmd);
  } catch (error) {
    console.warn("Error: ", error.message)
  }
}

/**
 * 用户加入桌位（核心授权流程起点）
 * @param {string} tableId 桌位 ID
 * @param {string} socketId Socket 连接 ID
 * @param {string} name 用户名/游客名
 * @param {string} token 认证令牌 (如有)
 * @param {string} userId 用户唯一标识
 */
function joinTable(tableId, socketId, name, token, userId) {
    try {
        const table = appState.tables.getTableById(tableId);
        if (!table) throw new Error("未找到桌位");
        
        // 权限判断逻辑：
        // 1. 如果提供了正确的桌位 token（扫码带入）
        // 2. 或者该用户之前已经被授权过
        // 3. 或者认证系统已关闭（qrcodeInfo 为 false），则视为自动授权
        const isAuthorizedByToken = token && token === table.token;
        const isAlreadyAuthorized = table.isUserAuthorized(userId);
        const isAuthSystemDisabled = !appState.settings.qrcodeInfo;

        // 将用户添加到桌位的用户列表中
        table.addUser(socketId, name, userId);

        // 如果 token 匹配或认证系统已关闭，自动授权该用户
        if (isAuthorizedByToken || isAuthSystemDisabled) {
            table.authorizeUser(userId);
        }
        
        const finalAuthorized = isAuthorizedByToken || isAlreadyAuthorized || isAuthSystemDisabled;
        return { 
            success: true, 
            data: table.users, 
            authorized: finalAuthorized, 
            token: finalAuthorized ? table.token : undefined 
        };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

/**
 * 管理端授权特定用户
 * @param {string} tableId 
 * @param {string} userId 
 */
function authorizeUser(tableId, userId) {
    try {
        const table = appState.tables.getTableById(tableId);
        if (!table) throw new Error("未找到桌位");
        
        if (table.authorizeUser(userId)) {
            const user = table.users.find(u => u.userId === userId);
            // 返回 token 以便客户端后续自动识别，并提供 socketId 用于单点通知
            return { success: true, token: table.token, users: table.users, socketId: user.socketId };
        }
        return { success: false, message: "未找到用户" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

/**
 * 管理端取消特定用户的授权
 */
function revokeUser(tableId, userId) {
    try {
        const table = appState.tables.getTableById(tableId);
        if (!table) throw new Error("未找到桌位");
        
        if (table.revokeUser(userId)) {
            const user = table.users.find(u => u.userId === userId);
            return { success: true, users: table.users, socketId: user.socketId };
        }
        return { success: false, message: "未找到用户" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

/**
 * 管理端授权桌位上的所有用户
 */
function authorizeAllUsers(tableId) {
    try {
        const table = appState.tables.getTableById(tableId);
        if (!table) throw new Error("未找到桌位");
        
        table.authorizeAll();
        return { success: true, token: table.token, users: table.users };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

/**
 * 获取桌位上当前连接的所有用户列表
 */
function getTableUsers(tableId) {
    try {
        const table = appState.tables.getTableById(tableId);
        if (!table) throw new Error("未找到桌位");
        return { success: true, data: table.users };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

/**
 * 更新用户名称 (用于游客修改昵称)
 */
function updateUserName(socketId, name) {
    try {
        let updatedTableId = null;
        let updatedUsers = [];

        // 遍历所有桌位找到匹配 socketId 的用户并更新名称
        for (const table of appState.tables.tables.values()) {
            const user = table.users.find(u => u.socketId === socketId);
            if (user) {
                user.name = name;
                updatedTableId = table.id;
                updatedUsers = table.users;
                logger.info(`用户 ${socketId} 在桌位 ${updatedTableId} 更新名称为 ${name}`);
                break;
            }
        }

        if (updatedTableId) {
            return { success: true, tableId: updatedTableId, users: updatedUsers };
        }
        logger.warn(`未在任何桌位中找到 socketId 为 ${socketId} 的用户`);
        return { success: false, message: "未找到用户" };
    } catch (error) {
        logger.error(`更新用户名时出错: ${error.message}`);
        return { success: false, message: error.message };
    }
}


module.exports = {
  addNewTable,
  updateTableWithoutOrder,
  removeTable,
  cleanTable,
  updateTablePassword,
  refreshTablePassword,
  tableLogin,
  getTableById,
  clientCmd,
  clickMsg,
  joinTable,
  authorizeUser,
  revokeUser,
  authorizeAllUsers,
  tableUsers: getTableUsers, // 别名保持一致性
  getTableUsers,
  updateUserName
};
