/**
 Function: 操作json文件 记录执行位置
 User: burning <923398776@qq.com>
 Date: 2019年06月19日
 */
const fs = require('fs');
const join = require('path').join;

const jsonOperation = (record, callback) => {
    global.CONFIG.record = record + 1;
    let path = join(__dirname, '../../config.json');
    fs.writeFile(path, JSON.stringify(global.CONFIG), (err) => {
        if (err) throw err;
        callback();
    })
};

module.exports = jsonOperation;
