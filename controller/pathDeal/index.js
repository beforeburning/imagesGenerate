/**
 Function: 图片url分析
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */
const url = require('url');
const create = require('../fsFun/create');

const pathDeal = (res, callback) => {
    let parse = url.parse(res);
    parse.host === 'img.jiankang.com' || !parse.host ? create('img', parse.path, (paths, name) => callback(paths, name)) : create('vde', parse.path, (paths, name) => callback(paths, name));
};

module.exports = pathDeal;
