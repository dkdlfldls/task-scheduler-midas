"use strict";

const sequelize = require('./sequelize').sequelize;
const sql = require('./sql');

exports.create_category = function(data,t){
    let title = data.title;
    let content = data.content;

    return sequelize.query(
        sql.create_category,
        {
            bind : {
                title : title,
                content : content
            },
            type : sequelize.QueryTypes.INSERT,
            transaction : t
        }
    )
};


exports.update_category = function(data,t){
    let title = data.title;
    let content = data.content;
    let category_id = data.category_id;
    let member_id = data.member_id;
    console.log(data);
    t = t || null;

    return sequelize.query(
        sql.update_category,
        {
            bind : {
                title : title,
                content : content,
                category_id : category_id
            },
            type : sequelize.QueryTypes.UPDATE,
            transaction : t
        }
    )
};



exports.delete_category = function(data,t){
    let category_id = data.category_id;
    t = t || null;

    return sequelize.query(
        sql.delete_category,
        {
            bind : {
                category_id : category_id
            },
            type : sequelize.QueryTypes.UPDATE,
            transaction : t
        }
    )
};


exports.get_category_list = function(data){
    let member_id = data.member_id;

    return sequelize.query(
        sql.get_category_list,
        {
            bind : {
                member_id : member_id
            },
            type : sequelize.QueryTypes.SELECT
        }
    )
}
