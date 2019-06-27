/**
 Function: 数据处理
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */
const pathDeal = require('../../controller/pathDeal');
const gmFun = require('../../controller/gmFun');
const imgDownload = require('../imgDownload');
const tensile = require('../../controller/gmFun/tensile');

const dataDeal = (res, callback) => {
    let list = res.map(item => new Promise(resolve => {
        let data = {
            id: item.id,
            title: item.title,
            img: item.doc_img,
            name: item.realname,
            hospital: item.hospital_name,
            deptId: item.keshi_id,
            dept: item.hospital_pkeshi,
            clinical: item.clinical_position
        };
        if (data.img) {
            // 创建文件夹
            pathDeal(data.img, (path, name) => {
                // 图片处理 合成
                gmFun(data, path, name, () => {
                    resolve();
                })
                // 下载图片
                // imgDownload(data, path, name, res => {
                //     if (res) {
                //         // 图片处理 拉升
                //         tensile(data, path, name, () => {
                //             console.log(`${data.title}`);
                //             resolve();
                //         })
                //     } else {
                //         resolve();
                //     }
                // })
            })
        } else {
            // 没找到img直接跳过
            console.log('----- 没有图片地址 跳过 -----');
            resolve();
        }
    }));

    Promise.all(list).then(() => {
        callback()
    });
};

module.exports = dataDeal;
