const { logger } = require('../utils/logger.js')
const tableService = require('../services/tableService.js');
const appStateService = require("../services/appStateService.js")
const { appState } = require('../state.js');
const db = require('../filedb.js');

/**
 * TableSocket 类
 * 处理与桌位管理相关的 Socket 事件，包括桌位增删改查、扫码加入、授权管理及客户呼叫
 */
class TableSocket {
    constructor(io) {
        this.io = io
    }

    /**
     * 管理端添加新桌位
     * @param {Object} tableData 桌位初始数据
     * @param {Function} callback 回调函数
     */
    managerAddTable(tableData, callback) {
        if (!tableData || tableData.id === undefined) {
            logger.error(`管理端添加桌子失败: 数据无效 ${JSON.stringify(tableData)}`)
            return callback({ success: false, message: "Invalid table data" });
        }
        logger.info(`管理端添加桌子 桌号 - ${tableData.id}`)
        const result = tableService.addNewTable(tableData);
        if (result.success) {
            logger.info(`管理端添加桌子成功`)
            db.saveAppStateData(appState)
        } else {
            logger.info(`管理端添加桌子失败`)
            logger.info(`失败原因: ${result.message}`)
        }
        callback(result);
    }

    /**
     * 管理端删除桌位
     * @param {string|number} id 桌位ID
     * @param {Function} callback 回调函数
     */
    deleteTable(id, callback) {
        logger.info(`管理端删除桌子 桌号 - ${id}`)
        const result = tableService.removeTable(id);
        if (result.success) {
            logger.info(`管理端删除桌子成功`)
            db.saveAppStateData(appState)
        } else {
            logger.info(`管理端删除桌子失败`)
            logger.info(`失败原因: ${result.message}`)
        }
        callback(result);
    };

    /**
     * 管理端清除桌位状态（清台）
     * @param {string|number} id 桌位ID
     * @param {Function} callback 回调函数
     */
    cleanTable(id, callback) {
        logger.info(`管理清除该桌子 桌号 - ${id}`)
        const result = tableService.cleanTable(id);
        if (result.success) {
            logger.info(`管理清除该桌子成功`)
            // 通知客户端桌位已清空
            this.io.emit(`client_table${id}`, result)
            db.saveAppStateData(appState)
            logger.info(`桌子状态已保存到磁盘`)
        } else {
            logger.info(`管理清除该桌子失败`)
            logger.info(`失败原因: ${result.message}`)
        }
        callback(result);
    }

    /**
     * 管理端修改桌位基础信息（人数、状态等，不含订单）
     * @param {Object} tableData 修改后的桌位数据
     * @param {Function} callback 回调函数
     */
    updateTable(tableData, callback) {
        if (!tableData || tableData.id === undefined) {
            logger.error(`管理端修改桌子失败: 数据无效 ${JSON.stringify(tableData)}`)
            return callback({ success: false, message: "Invalid table data" });
        }
        
        const adults = tableData.peopleType?.adults ?? 'N/A';
        const children = tableData.peopleType?.children ?? 'N/A';
        const status = tableData.status ?? 'N/A';

        logger.info(`管理端修改桌子状态 桌号 - ${tableData.id}; 成人 - ${adults}; 儿童 - ${children}; 桌子状态 - ${status}`)
        const result = tableService.updateTableWithoutOrder(tableData)

        if (result.success) {
            logger.info(`管理端修改桌子成功`)
            db.saveAppStateData(appState)
            // 向该桌位的客户端同步更新
            this.io.emit(`client_table${tableData.id}`, result)
        } else {
            logger.info(`管理端修改桌子失败`)
            logger.info(`失败原因: ${result.message}`)
        }
        callback(result);
    }

    /**
     * 客户端获取桌位详细信息
     */
    clientGetTableById(socket, value, callback){
          const result = tableService.getTableById(value)
          callback(result)
    }

    /**
     * 客户端呼叫服务（如呼叫、结账、水等）
     * @param {string|number} id 桌位ID
     * @param {Object} cmd 呼叫指令数据
     */
    clientCallCMD(id, cmd, callback){
        logger.info(`桌号: ${id} 客户呼叫: ${cmd.cmd} nif:${cmd.nif} note:${cmd.note} `)
        const result = tableService.clientCmd(id,cmd)
        if(result.success) {
            // 向管理端广播呼叫信息
            this.io.emit('client_cmd', id, result.data)
            db.saveAppStateData(appState)
        }
        callback(result)
    }

    /**
     * 管理端确认/点击处理呼叫消息
     */
    managerClickCMD(id, cmd){
        logger.info(`桌号: ${id} 管理确认: ${cmd} `)
        tableService.clickMsg(id,cmd)
        db.saveAppStateData(appState)
    }

    /**
     * 客户端加入桌位（扫码后的核心逻辑）
     * @param {Object} socket 当前 Socket 实例
     * @param {string} tableId 桌位ID
     * @param {string} name 游客名称
     * @param {string} token 认证令牌 (如有)
     * @param {string} userId 会员用户ID (如有)
     */
    clientJoinTable(socket, tableId, name, token, userId, cb) {
        const result = tableService.joinTable(tableId, socket.id, name, token, userId);
        if (result.success) {
            // 通知管理端该桌位有新用户加入/状态更新
            this.io.emit('manager_table_users_update', { tableId, users: result.data });
        }
        cb(result);
    }
    
    /**
     * 管理端手动授权用户
     */
    managerAuthorizeUser(tableId, userId, cb) {
        const result = tableService.authorizeUser(tableId, userId);
        if (result.success) {
            // 向特定客户端推送授权成功的令牌
            this.io.to(result.socketId).emit('client_authorized', { token: result.token });
            // 更新管理端的列表显示
            this.io.emit('manager_table_users_update', { tableId, users: result.users });
        }
        cb(result);
    }
    
    /**
     * 管理端撤销用户授权
     */
    managerRevokeUser(tableId, userId, cb) {
        const result = tableService.revokeUser(tableId, userId);
        if (result.success) {
            // 通知客户端授权已撤销
            this.io.to(result.socketId).emit('client_revoked');
            // 更新管理端列表
            this.io.emit('manager_table_users_update', { tableId, users: result.users });
        }
        cb(result);
    }
    
    /**
     * 管理端一键授权该桌位所有用户
     */
    managerAuthorizeAll(tableId, cb) {
        const result = tableService.authorizeAllUsers(tableId);
        if (result.success) {
            // 循环通知所有被授权的客户端
            result.users.forEach(u => {
                 this.io.to(u.socketId).emit('client_authorized', { token: result.token });
            });
            this.io.emit('manager_table_users_update', { tableId, users: result.users });
        }
        cb(result);
    }

    /**
     * 管理端获取指定桌位的所有用户列表
     */
    managerGetTableUsers(tableId, cb) {
        const users = tableService.getTableUsers(tableId);
        cb({ success: true, data: users });
    }

    /**
     * 客户端更新游客名称
     */
    clientUpdateGuestName(socket, name, cb) {
        const result = tableService.updateUserName(socket.id, name);
        if (result.success) {
            this.io.emit('manager_table_users_update', { tableId: result.tableId, users: result.users });
        }
        if (cb) cb(result);
    }

    /**
     * 注册 Socket 事件监听器
     */
    registerHandlers(socket) {
        // ... validate 辅助函数保持不变 ...
        const validate = (handler, count, schema = []) => (...args) => {
            const cb = typeof args[args.length - 1] === 'function' ? args.pop() : () => {};
            if (args.length !== count) {
                logger.error(`Socket Event Error: Expected ${count} arguments but got ${args.length}`);
                return cb({ success: false, message: `Invalid argument count: expected ${count}` });
            }
            const isInvalid = schema.some((type, index) => {
                if (type === 'string' && typeof args[index] !== 'string') return true;
                if (type === 'number' && typeof args[index] !== 'number') return true;
                if (type === 'object' && (typeof args[index] !== 'object' || args[index] === null)) return true;
                return false;
            });
            if (isInvalid) {
                logger.error(`Socket Event Error: Data structure mismatch for args: ${JSON.stringify(args)}`);
                return cb({ success: false, message: "Invalid data structure" });
            }
            return handler(...args, cb);
        };

        // --- 注册事件 ---
        socket.on('add_table', validate((tableData, cb) => this.managerAddTable(tableData, cb), 1, ['object']));
        socket.on('remove_table', validate((id, cb) => this.deleteTable(id, cb), 1));
        socket.on('clean_table', validate((id, cb) => this.cleanTable(id, cb), 1));
        socket.on('update_table_exceptOrder', validate((tableData, cb) => this.updateTable(tableData, cb), 1, ['object']));
        
        this.io.emit('send_tables', appState.tables.toJSON());

        socket.on('get_table_by_id', (value, callback) => { this.clientGetTableById(socket, value, callback) })
        socket.on('client_cmd', (id, cmd, callback) => { this.clientCallCMD(id, cmd, callback) })
        socket.on('manager_click_cmd', (id, cmd) => { this.managerClickCMD(id, cmd) })

        // 核心授权流程事件
        socket.on('client_join_table', (tableId, name, token, userId, cb) => { this.clientJoinTable(socket, tableId, name, token, userId, cb) });
        socket.on('manager_authorize_user', (tableId, userId, cb) => { this.managerAuthorizeUser(tableId, userId, cb) });
        socket.on('manager_revoke_user', (tableId, userId, cb) => { this.managerRevokeUser(tableId, userId, cb) });
        socket.on('manager_authorize_all', (tableId, cb) => { this.managerAuthorizeAll(tableId, cb) });
        socket.on('manager_get_table_users', (tableId, cb) => { this.managerGetTableUsers(tableId, cb) });
        socket.on('client_update_guest_name', (name, cb) => { this.clientUpdateGuestName(socket, name, cb) });
    }
}

module.exports = { TableSocket }