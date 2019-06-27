/**
 Function: 随机数
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const random = (lower, upper) => Math.floor(Math.random() * ((upper + 1) - lower)) + lower;

module.exports = random;
