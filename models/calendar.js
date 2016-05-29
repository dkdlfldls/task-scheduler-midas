"use strict";

const sequelize = require('./sequelize').sequelize;
const sql = require('./sql');
//
//exports.calendar_list = function(data,t){
//    let member_id = data.member_id;
//    let category_id = data.category_id;
//    let year = data.year;
//    let month = data.month;
//    let target_time = null;
//    t = t || null;
//
//
//    let query = null;
//
//    if(!isNaN(category_id) && category_id == 0){
//        if(!isNaN(month)){
//            target_time = year;
//            query = sql.calendar_list_year;
//        }
//        else{
//            target_time = year+"-"+month;
//            query = sql.calendar_list_month;
//        }
//    }
//    else{
//        if(!isNaN(month)){
//            target_time = year;
//            query = sql.calendar_list_year_with_category;
//        }
//        else{
//            target_time = year+"-"+month;
//            query = sql.calendar_list_month_with_category;
//        }
//    }
//
//    return sequelize.query(
//        query,
//        {
//            bind : {
//                target_time : target_time,
//                category_id : category_id,
//                member_id : member_id
//            },
//            type : sequelize.QueryTypes.SELECT,
//            transaction : t
//        }
//    )
//};


exports.calendar_list_month = function(data,t){
    let member_id = data.member_id;
    let year = data.year;

    let month = data.month;
    month = month+"";
    console.log(month.length);
    if(month.length == 1){
        month = "0"+month;
    }
    let target_time = year+"-"+month;
    t = t || null;

    return sequelize.query(
        sql.calendar_list_month,
        {
            bind : {
                target_time : target_time,
                member_id : member_id
            },
            type : sequelize.QueryTypes.SELECT,
            transaction : t
        }
    )
};



exports.calendar_list_year = function(data,t){
    let member_id = data.member_id;
    let year = data.year;
    let target_time = year;
    t = t || null;

    return sequelize.query(
        sql.calendar_list_year,
        {
            bind : {
                target_time : target_time,
                member_id : member_id
            },
            type : sequelize.QueryTypes.SELECT,
            transaction : t
        }
    )
};


exports.calendar_list_month_with_category = function(data,t){
    let member_id = data.member_id;
    let year = data.year;
    let month = data.month;
    month = month+"";
    console.log(month.length);
    if(month.length == 1){
        month = "0"+month;
    }
    let category_id = data.category_id;
    let target_time = year+"-"+month;
    t = t || null;

    return sequelize.query(
        sql.calendar_list_month_with_category,
        {
            bind : {
                category_id : category_id,
                target_time : target_time,
                member_id : member_id
            },
            type : sequelize.QueryTypes.SELECT,
            transaction : t
        }
    )
};



exports.calendar_list_year_with_category = function(data,t){
    let member_id = data.member_id;
    let year = data.year;
    let category_id = data.category_id;
    let target_time = year;
    t = t || null;

    return sequelize.query(
        sql.calendar_list_year_with_category,
        {
            bind : {
                category_id : category_id,
                target_time : target_time,
                member_id : member_id
            },
            type : sequelize.QueryTypes.SELECT,
            transaction : t
        }
    )
};
