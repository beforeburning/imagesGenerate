/**
 Function: 图片下载
 User: burning <923398776@qq.com>
 Date: 2019年06月24日
 */
const axios = require('axios');
const request = require('request');
const fs = require('fs');
const cache = require('../../controller/fsFun/cache');

const imgDownload = (data, path, name, callback) => {
    axios.defaults.timeout = 10000;
    axios({
        method: 'get',
        url: `http${data.img.split('https')[1]}`,
        // host: '61.160.251.53',
        responseType: 'stream',
        header: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3824.6 Safari/537.36'
        }
    }).then((response) => {
        // 创建文件流
        let ws = response.data.pipe(fs.createWriteStream(`${path}/${name}`));
        ws.on('error', () => {
            ws.end();
            clearTimeout(timeOut);
            callback(false);
        });
        ws.on('finish', () => {
            clearTimeout(timeOut);
            ws.end();
            callback(true);
        });
        // 超时时间
        let timeOut = setTimeout(() => {
            // 记录错误信息
            cache(data.id, data.img, 'err', () => {
                ws.end();
                callback(false);
            })
        }, 5000);
    }).catch(err => {
        // 记录错误信息
        cache(data.id, data.img, 'err', () => {
            callback(false);
        })
    })
};

module.exports = imgDownload;
