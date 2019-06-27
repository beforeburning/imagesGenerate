/**
 Function:  图片处理 - 小孩
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */

const gm = require('gm');
const join = require('path').join;
const fontPath = require('../../../static');

const children = (classification, random, data, path, name, top = '', bottom = '', callback) => {
    // 标题文字大小
    let titleFontSize = 56;
    // 名称字体大小
    const nameFontSize = 24;
    // 输入框宽度
    const nameX = 0;
    // 科室字体大小
    const deptFontSize = 24;
    // 背景
    let backPath = `${join(__dirname, `../../../static/background/children/${random}.jpg`)}`;
    // 存储地址
    let resSrc = join(path, name);
    // 变量处理
    let color = '';
    // 名称 Y轴
    let nameY = '';
    // 科室 Y轴
    let deptY = '';
    switch (random) {
        case 1:
            color = '#ffffff';
            nameY = 42;
            deptY = 95;
            break;
        default:
            color = '#ffffff';
            nameY = 62;
            deptY = 120;
    }

    if (top && bottom) {
        // 标题 x轴 居中
        const titleX = 0;
        titleFontSize = 48;
        // 标题 y轴 上固定
        const titleY = -90;
        const titleY2 = -20;
        gm(backPath)
            .font(fontPath.footPathTitle)
            .fontSize(titleFontSize)
            .fill('#fff')
            .drawText(titleX, titleY, `${top}`, 'Center')
            .drawText(titleX, titleY2, `${bottom}`, 'Center')
            .font(fontPath.footPathName)
            .fill(color)
            .fontSize(nameFontSize)
            .drawText(nameX, nameY, `${data.name} ${data.clinical}`, 'Center')
            .fill('#fff')
            .fontSize(deptFontSize)
            .drawText(nameX, deptY, `${data.hospital}  ${data.dept}`, 'Center')
            .quality(60)
            .write(resSrc, (err) => {
                // 输出的图片路径
                if (err) {
                    console.log('生成失败 跳过');
                    callback();
                } else {
                    console.log(`${data.title} - 生成成功`);
                    callback();
                }
            })
    } else {
        // 标题 x轴 居中
        const titleX = 0;
        // 标题 y轴 上固定
        const titleY = -65;
        gm(backPath)
            .font(fontPath.footPathTitle)
            .fontSize(titleFontSize)
            .fill('#fff')
            .drawText(titleX, titleY, `${data.title}`, 'Center')
            .font(fontPath.footPathName)
            .fill(color)
            .fontSize(nameFontSize)
            .drawText(nameX, nameY, `${data.name} ${data.clinical}`, 'Center')
            .fill('#fff')
            .fontSize(deptFontSize)
            .drawText(nameX, deptY, `${data.hospital}  ${data.dept}`, 'Center')
            .quality(60)
            .write(resSrc, (err) => {
                // 输出的图片路径
                if (err) {
                    console.log('生成失败 跳过');
                    callback();
                } else {
                    console.log(`${data.title} - 生成成功`);
                    callback();
                }
            })
    }
};

module.exports = children;
