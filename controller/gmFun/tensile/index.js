/**
 Function: 图片拉升
 User: burning <923398776@qq.com>
 Date: 2019年06月24日
 */

const gm = require('gm');
const cache = require('../../fsFun/cache');

const index = (data, path, name, callback) => {
    gm(`${path}/${name}`)
    // 抗锯齿
        .antialias(false)
        // 去斑
        .despeckle()
        // 去噪点
        .noise('uniform')
        .resize(800, 450, "!")
        // .noProfile()
        // .quality(100)
        .write(`${path}/${name}`, (err) => {
            if (err) {
            }
            cache(data.id, data.img, 'cache', () => {
                callback();
            })
        })
};

module.exports = index;
