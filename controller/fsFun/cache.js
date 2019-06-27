/**
 Function: 记录执行的文件 清楚缓存
 User: burning <923398776@qq.com>
 Date: 2019年06月19日
 */

const fs = require('fs');
const join = require('path').join;

const cache = (id, src, str, callback) => {
    let path = join(__dirname, `../../${str}.log`);
    if (src.indexOf('http') === -1) {
        src = `http://img.jiankang.com/${src}`;
    }
    fs.writeFile(path, `${src}####${id}\n`, {'flag': 'a'}, (err) => {
        if (err) throw err;
        callback();
    });
};

module.exports = cache;
