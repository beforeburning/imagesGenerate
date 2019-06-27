/**
 Function: 请求视屏原始数据
 User: burning <923398776@qq.com>
 Date: 2019年06月18日
 */
const connection = require('./connection').dao();

const queryData = (current) => {
    return new Promise((resolve, reject) => {
        // video sql
        let sql = `
            SELECT a.id, a.title, b.doc_img, c.realname, d.name as hospital_name, e.name as hospital_pkeshi, a.keshi_id, g.name as clinical_position
            FROM jk_doctor_video as a
            LEFT JOIN jk_doctor_video_info as b ON a.id = b.id
            LEFT JOIN jk_doctor as c ON a.doctor_id = c.id
            LEFT JOIN jk_hospital as d ON d.id = c.hospital_id
            LEFT JOIN jk_hospital_keshi as e ON c.hospital_dept_id = e.id
            LEFT JOIN jk_hospital_keshi as f ON c.dept_id = f.id
            LEFT JOIN jk_doctor_config as g ON g.id = c.clinical_position
            WHERE a.mark=1 AND a.state=1 AND a.id >= 3305 AND a.id <= 7618 ORDER BY a.id ASC LIMIT ${current * global.CONFIG.concurrency},${global.CONFIG.concurrency}
        `;
        // voide sql
        // let sql = `
        //     SELECT a.id, a.title, a.imageurl as doc_img, c.realname, d.name as hospital_name, e.name as hospital_pkeshi, a.keshi_id, g.name as clinical_position
        //     FROM jk_doctor_audio as a
        //     LEFT JOIN jk_doctor as c ON a.doctor_id = c.id
        //     LEFT JOIN jk_hospital as d ON d.id = c.hospital_id
        //     LEFT JOIN jk_hospital_keshi as e ON c.hospital_dept_id = e.id
        //     LEFT JOIN jk_hospital_keshi as f ON c.dept_id = f.id
        //     LEFT JOIN jk_doctor_config as g ON g.id = c.clinical_position
        //     WHERE a.mark=1 AND a.imageurl != "" AND a.id >= 1019 AND a.id <= 3304 ORDER BY a.id ASC LIMIT ${current * global.CONFIG.concurrency},${global.CONFIG.concurrency}
        // `;
        connection.query(sql, (err, results) => {
            if (err) throw err;
            let str = JSON.stringify(results);
            str === '[]' ? reject('----- 数据结束 -----') : resolve(JSON.parse(str));
        });
    })
};

module.exports = queryData;
