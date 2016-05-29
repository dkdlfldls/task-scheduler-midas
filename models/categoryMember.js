"use strict";

const sequelize = require('./sequelize').sequelize;
const sql = require('./sql');

exports.add_member = function(data,t){
    let category_id = data.category_id;
    let member_id = data.member_id;
    t = t || null;


    return sequelize.query(
        sql.add_member,
        {
            bind : {
                category_id : category_id,
                member_id : member_id
            },
            type : sequelize.QueryTypes.INSERT,
            transaction : t
        }
    )
};
