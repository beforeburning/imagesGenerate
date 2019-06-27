/**
 Function: mysql 单例
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

//链接数据库
const mysql = require('mysql');

// 启动数据库
let connection = undefined;
const dao = () => {
    if (connection === undefined) {
        connection = mysql.createConnection({
            host: CONFIG.sql.host,
            user: CONFIG.sql.user,
            password: CONFIG.sql.password,
            database: CONFIG.sql.database
        });
        connection.connect();
    }
    return connection;
};

module.exports = {
    dao
};

