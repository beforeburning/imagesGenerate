/**
 Function: 递归生成目录
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const fs = require('fs');
const path = require('path');

const mkdirs = (dirname, callback) => fs.exists(dirname, (exists) => exists ? callback() : mkdirs(path.dirname(dirname), () => fs.mkdir(dirname, callback)));

module.exports = mkdirs;
