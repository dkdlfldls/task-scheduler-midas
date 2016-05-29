"use strict";

const sequelize = require('./sequelize').sequelize;
const sql = require('./sql');

exports.get_todo = function(data) {
    let todo_id = data.todo_id;

    return sequelize.query(
        sql.add_todo,
        {
            bind : {
                todo_id : todo_id
            },
            type : sequelize.QueryTypes.SELECT
        }
    )
}

exports.add_todo = function(data) {
    return sequelize.query(
        sql.add_todo,
        {
            bind : {
                title : data.title,
                content : data.content,
                member_id : data.member_id,
                reg_time : data.reg_time,
                start_time : data.start_time,
                end_time : data.end_time,
                category_id : data.category_id
            },
            type : sequelize.QueryTypes.INSERT
        }
    )
}

exports.update_todo = function(data) {
    return sequelize.query(
        sql.update_todo,
        {
            bind : {
                title : data.title,
                content : data.content,
                todo_id : data.todo_id,
                start_time : data.start_time,
                end_time : data.end_time,
                category_id : data.category_id,
                member_id : data.member_id
            },
            type : sequelize.QueryTypes.UPDATE
        }
    )
}

exports.update_todo_time = function(data) {
    return sequelize.query(
        sql.update_todo_time,
        {
            bind : {
                todo_id : data.todo_id,
                start_time : data.start_time,
                end_time : data.end_time,
                member_id : data.member_id
            },
            type : sequelize.QueryTypes.UPDATE
        }
    )
}

exports.delete_todo = function(data) {
    return sequelize.query(
        sql.delete_todo,
        {
            bind : {
                todo_id : data.todo_id
            },
            type : sequelize.QueryTypes.UPDATE
        }
    )
}

exports.delete_todo_under_category = function(data, t) {
    t = t || null;
    return sequelize.query(
        sql.delete_todo_under_category,
        {
            bind : {
                category_id : data.category_id
            },
            type : sequelize.QueryTypes.UPDATE,
            transaction : t
        }
    )
};

exports.get_todo_list = function(data) {
    let category_id = data.category_id;
    let member_id = data.member_id;


    let query = sql.get_todo_list_all_category;
    if(!isNaN(category_id)){
        query =sql.get_todo_list;
    }
    return sequelize.query(
        query,
        {
            bind : {
                category_id : category_id,
                member_id : member_id
            },
            type : sequelize.QueryTypes.SELECT
        }
    )
}

exports.todo_search = function(data) {
    let keyword = "%".concat(data.keyword, "%");
    let category_id = "%".concat(data.category_id, "%");
    return sequelize.query(
        sql.todo_search,
        {
            bind : {
                category_id : category_id,
                keyword : keyword
                
            },
            type : sequelize.QueryTypes.SELECT
        }
    )
}