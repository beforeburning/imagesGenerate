/**
 Function: 图片处理
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const distribution = require('./distribution');
const randomFun = require('../tool/random');
const cache = require('../fsFun/cache');

const gmFun = (data, path, name, callback) => {
    let dept = global.CONFIG.classification;

    // 科室
    let classification = '';
    // 背景随机
    let random = 0;
    switch (dept[data.deptId]) {
        case 'orthopaedic':
            classification = 'orthopaedic';
            random = randomFun(1, 2);
            break;
        case 'men':
            classification = 'men';
            random = randomFun(1, 2);
            break;
        case 'women':
            classification = 'women';
            random = randomFun(1, 2);
            break;
        case 'children':
            classification = 'children';
            random = randomFun(1, 2);
            break;
        case 'traditional':
            classification = 'traditional';
            random = randomFun(1, 2);
            break;
        default:
            classification = 'other';
            random = randomFun(1, 4);
    }

    // 执行图片生成方法 回调执行成功 记录地址用来刷新缓存
    distribution(classification, random, data, path, name, () => {
        cache(data.id, data.img, 'cache', () => {
            callback();
        })
    })

};

module.exports = gmFun;
