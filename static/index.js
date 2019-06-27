/**
 Function: 字体绝对路径
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const join = require('path').join;

let fontPath = {
    footPathTitle: join(__dirname, `./font/SOURCEHANSANSCN-BOLD.OTF`),
    footPathName: join(__dirname, `./font/SOURCEHANSANSCN-MEDIUM_0.OTF`)
};

module.exports = fontPath;
