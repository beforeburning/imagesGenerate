/**
 Function: 数据处理 方法分发
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const other = require('../gmCollection/other');
const children = require('../gmCollection/children');
const orthopaedic = require('../gmCollection/orthopaedic');
const women = require('../gmCollection/women');
const men = require('../gmCollection/men');
const traditional = require('../gmCollection/traditional');

const distribution = (classification, random, data, path, name, callback) => {
    // 大于24字 不处理
    if (data.title.length < 24) {
        let top = '';
        let bottom = '';
        // 长度大于12字
        if (data.title.length > 12) {
            top = data.title.substr(0, 12);
            bottom = data.title.substr(12, data.title.length);
        }
        eval(`
            ${classification}(classification, random, data, path, name, top, bottom, ()=> {
                callback()
            })`
        )
    } else {
        console.log('大于24字,请手动处理');
        callback();
    }
};

module.exports = distribution;
