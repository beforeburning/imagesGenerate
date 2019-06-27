/**
 Function: 图片处理 - 骨科
 User: burning <923398776@qq.com>
 Date: 2019年06月19日
 */

const gm = require('gm');
const join = require('path').join;
const fontPath = require('../../../static');

const orthopaedic = (classification, random, data, path, name, top = '', bottom = '', callback) => {
    // 标题文字大小
    let titleFontSize = 56;
    // 名称字体大小
    const nameFontSize = 22;
    // 输入框宽度
    const nameX = 0;
    // 科室字体大小
    const deptFontSize = 24;
    // 背景
    let backPath = `${join(__dirname, `../../../static/background/orthopaedic/${random}.jpg`)}`;
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
            nameY = 36;
            deptY = 90;
            break;
        default:
            color = '#ffffff';
            nameY = 20;
            deptY = 75;
    }

    if (top && bottom) {
        // 标题 x轴 居中
        const titleX = 0;
        titleFontSize = 48;
        // 标题 y轴 上固定
        let titleY = '';
        let titleY2 = '';
        switch (random) {
            case 1:
                titleY = -95;
                titleY2 = -35;
                break;
            default:
                titleY = -120;
                titleY2 = -55;
        }

        gm(backPath)
            .font(fontPath.footPathTitle)
            .fontSize(titleFontSize)
            .fill(color)
            .drawText(titleX, titleY, `${top}`, 'Center')
            .drawText(titleX, titleY2, `${bottom}`, 'Center')
            .font(fontPath.footPathName)
            .fill(color)
            .fontSize(nameFontSize)
            .drawText(nameX, nameY, `${data.name} ${data.clinical}`, 'Center')
            .fill(color)
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
        let titleY = '';
        switch (random) {
            case 1:
                titleY = -50;
                break;
            default:
                titleY = -90;
        }
        gm(backPath)
            .font(fontPath.footPathTitle)
            .fontSize(titleFontSize)
            .fill(color)
            .drawText(titleX, titleY, `${data.title}`, 'Center')
            .font(fontPath.footPathName)
            .fill(color)
            .fontSize(nameFontSize)
            .drawText(nameX, nameY, `${data.name} ${data.clinical}`, 'Center')
            .fill(color)
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

module.exports = orthopaedic;
