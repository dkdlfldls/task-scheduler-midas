"use strict";

const sequelize = require('./sequelize').sequelize;
const sql = require('./sql');
exports.login = function(data){
    return sequelize.query(
        sql.login,
        {
            bind : {
                email : data.email
//                ,password : data.password
            },
            type : sequelize.QueryTypes.SELECT
        }
    )
}

exports.member_regist =  function(data) {
    let hash = data.hash;
    let email = data.email;
    let name = data.name;
    return sequelize.query(
        sql.member_regist,
        {
            bind : {
                email : email,
                password : hash,
                name : name
            },
            type : sequelize.QueryTypes.INSERT
        }
    )
}