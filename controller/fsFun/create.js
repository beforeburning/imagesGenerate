/**
 Function: 根据路径在本地创建目录
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const join = require('path').join;
const mkdirs = require('./mkdirs');

const create = (dist, img, callback) => {
    let pathRep = img.split('/');
    let name = pathRep.pop();
    // 目录结构
    let paths = join(__dirname, '../../results', dist, ...pathRep);
    // 创建
    mkdirs(paths, () => callback(paths, name));
};

module.exports = create;
