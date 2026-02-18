const { logger } = require('../utils/logger.js')
const tableService = require('../services/tableService.js');
const appStateService = require("../services/appStateService.js")
const { appState } = require('../state.js');
const db = require('../filedb.js');

class TableSocket {
    constructor(io) {
        this.io = io
    }

    managerAddTable(tableData, callback) {
        logger.info(`管理端添加桌子 桌号 - ${tableData.id}`)
        const result = tableService.addNewTable(tableData);
        if (result.success) {
            logger.info(`管理端添加桌子成功`)
            db.saveAppStateData(appState)
            callback({ code: 200, ...result });
        } else {
            logger.info(`管理端添加桌子失败`)
            logger.info(`失败原因: ${result.message}`)
            callback({ code: 400, ...result });
        }
    }


    deleteTable(id, callback) {
        logger.info(`管理端删除桌子 桌号 - ${id}`)
        const result = tableService.removeTable(id);
        if (result.success) {
            logger.info(`管理端删除桌子成功`)
            db.saveAppStateData(appState)
            callback({ code: 200, ...result });
        } else {
            logger.info(`管理端删除桌子失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result });
        }
    };

    // 清除桌子
    cleanTable(id, callback) {
        logger.info(`管理清除改桌子 桌号 - ${id}`)
        const result = tableService.cleanTable(id);
        const table = tableService.getTableById(id)
        if (result.success) {
            logger.info(`管理清除改桌子成功`)
            this.io.emit(`client_table${id}`, table.data)
            db.saveAppStateData(appState)
            logger.info(`桌子状态已保存到磁盘`)
            callback({ code: 200, ...result });
        } else {
            logger.info(`管理清除改桌子失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result });
        }
    }

    // 修改桌子
    updateTable(tableData, callback) {
        logger.info(`管理端修改桌子状态 桌号 - ${tableData.id}; 成人 - ${tableData.peopleType.adults}; 儿童 - ${tableData.peopleType.children}; 桌子状态 - ${tableData.status}`)
        const result = tableService.updateTableWithoutOrder(tableData)

        if (result.success) {
            logger.info(`管理端修改桌子成功`)
            db.saveAppStateData(appState)
            callback({ code: 200, ...result });
        } else {
            logger.info(`管理端修改桌子失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result });
        }

        // 给客户端发送桌子信息
        const table = tableService.getTableById(tableData.id)
        if (table.success) {
            this.io.emit(`client_table${tableData.id}`, table)
        }
    }

        // 返回table id ，发送桌子信息，目前价格
    clientGetTableById(socket,value, callback){
          const result = tableService.getTableById(value)
          //const price = appStateService.getCurrentPrice()
          //socket.emit('client_currentPrice', price)
          callback({ code: result.success ? 200 : 404, ...result });
    }



    clientCallCMD(id, cmd, callback){
        logger.info(`桌号: ${id} 客户呼叫: ${cmd.cmd} nif:${cmd.nif} note:${cmd.note} `)
        const result = tableService.clientCmd(id,cmd)
        if(result.success) {
            this.io.emit('client_cmd', id, result.data)
            db.saveAppStateData(appState)
            callback({ code: 200, ...result });
        } else {
            callback({ code: 400, ...result });
        }
    }

    managerClickCMD(id, cmd){
        logger.info(`桌号: ${id} 管理确认: ${cmd} `)
        tableService.clickMsg(id,cmd)
        db.saveAppStateData(appState)
    }

    // --- 认证系统相关 ---
    
    // 客户端请求加入桌子（认证/登录）
    clientJoinTable(socket, { tableId, user }, callback) {
        logger.info(`桌号: ${tableId} 用户请求加入: ${user.username} (${user.id})`);
        const table = appState.tables.getTableById(tableId);
        if (!table) {
            return callback({ code: 404, success: false, message: 'Table not found' });
        }

        // 检查用户是否已在列表中
        let existingUser = table.users.find(u => u.id === user.id);
        if (!existingUser) {
            existingUser = {
                id: user.id,
                username: user.username,
                authorized: false // 初始未授权
            };
            table.users.push(existingUser);
            db.saveAppStateData(appState);
            // 通知管理端有新用户待授权
            this.io.emit('manager_new_user_request', { tableId, user: existingUser });
            this.io.emit('send_tables', appState.tables.toJSON());
        }

        callback({ code: 200, success: true, user: existingUser });
    }

    // 管理端更新用户授权状态
    managerUpdateUserAuth(tableId, userId, authorized, callback) {
        logger.info(`管理端更新授权: 桌号 ${tableId}, 用户 ${userId}, 状态 ${authorized}`);
        const table = appState.tables.getTableById(tableId);
        if (!table) return callback({ code: 404, success: false, message: 'Table not found' });

        const user = table.users.find(u => u.id === userId);
        if (user) {
            user.authorized = authorized;
            db.saveAppStateData(appState);
            // 通知该桌子所有客户端用户状态变更
            this.io.emit(`client_table${tableId}`, table.toJSON());
            this.io.emit('send_tables', appState.tables.toJSON());
            callback({ code: 200, success: true });
        } else {
            callback({ code: 404, success: false, message: 'User not found' });
        }
    }

    // 客户端更新游客姓名
    clientUpdateGuestName({ tableId, userId, newName }, callback) {
        logger.info(`桌号: ${tableId} 用户 ${userId} 更新姓名为: ${newName}`);
        const table = appState.tables.getTableById(tableId);
        if (!table) return callback({ code: 404, success: false, message: 'Table not found' });

        const user = table.users.find(u => u.id === userId);
        if (user) {
            user.username = newName;
            db.saveAppStateData(appState);
            // 通知该桌子所有客户端用户状态变更
            this.io.emit(`client_table${tableId}`, table.toJSON());
            this.io.emit('send_tables', appState.tables.toJSON());
            callback({ code: 200, success: true });
        } else {
            callback({ code: 404, success: false, message: 'User not found' });
        }
    }

    // 客户端离开桌子（登出）
    clientLeaveTable({ tableId, userId }) {
        logger.info(`桌号: ${tableId} 用户请求离开: ${userId}`);
        const table = appState.tables.getTableById(tableId);
        if (!table) return;

        const initialLength = table.users.length;
        table.users = table.users.filter(u => u.id !== userId);
        
        if (table.users.length !== initialLength) {
            db.saveAppStateData(appState);
            // 通知该桌子所有客户端用户状态变更
            this.io.emit(`client_table${tableId}`, table.toJSON());
            this.io.emit('send_tables', appState.tables.toJSON());
            logger.info(`用户 ${userId} 已从桌号 ${tableId} 移除`);
        }
    }

    registerHandlers(socket) {
        socket.on('add_table', (tableData, callback) => { this.managerAddTable(tableData, callback) })
        socket.on('remove_table', (id, callback) => { this.deleteTable(id, callback) })
        socket.on('clean_table', (id, callback) => { this.cleanTable(id, callback) });
        socket.on('update_table_exceptOrder', (tableData, callback) => { this.updateTable(tableData, callback) });
        // console.log("appState.tables.toJSON()",appState.tables.toJSON())
        this.io.emit('send_tables', appState.tables.toJSON());

        socket.on('client_get_table', (id, callback) => {
            const result = tableService.getTableById(id);
            callback({ code: result.success ? 200 : 404, ...result });
        })
        socket.on('get_table_by_id', (value, callback) => { this.clientGetTableById(socket, value, callback) });
        socket.on("client_cmd", (id,cmd,callback) => { this.clientCallCMD(id, cmd, callback) });
        socket.on("click_msg", (id,cmd) => { this.managerClickCMD(id,cmd) });
        
        // 认证相关
        socket.on('client_join_table', (data, callback) => { this.clientJoinTable(socket, data, callback) });
        socket.on('manager_update_user_auth', ({ tableId, userId, authorized }, callback) => { 
            this.managerUpdateUserAuth(tableId, userId, authorized, callback) 
        });
        socket.on('client_update_guest_name', (data, callback) => { this.clientUpdateGuestName(data, callback) });
        socket.on('client_leave_table', (data) => { this.clientLeaveTable(data) });
    }
}

module.exports = { TableSocket }