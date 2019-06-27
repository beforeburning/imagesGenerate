/**
 Function: C层开始
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const queryData = require('../model/dao/queryData');
const dataDeal = require('../model/dataDeal');
const jsonOperation = require('../model/jsonOperation');

// 数据处理
const app = () => {
    let record = global.CONFIG.record;
    const many = (current) => {
        queryData(current).then(res => {
            // 回调返回后继续执行
            dataDeal(res, () => {
                jsonOperation(record, () => {
                    // 记录状态
                    record++;
                    many(record);
                })
            });
        }).catch(res => process.exit(console.log(res)));
    };
    many(record);
};

module.exports = app;
