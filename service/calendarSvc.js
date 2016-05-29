const calendar = require('../models/calendar');
const sequelize = require('../models/sequelize').sequelize;

exports.calendar_list_month = function(data) {
        return calendar.calendar_list_month(data)
            .then(function(list){
                console.log(list,list);
                return Promise.resolve({list : list});
            })
};

exports.calendar_list_year = function(data) {
        return calendar.calendar_list_year(data)
            .then(function(list){
                console.log(list,list);
                return Promise.resolve({list : list});
            })
};

exports.calendar_list_month_with_category = function(data) {
        return calendar.calendar_list_month_with_category(data)
            .then(function(list){
                console.log(list,list);
                return Promise.resolve({list : list});
            })
};


exports.calendar_list_year_with_category = function(data) {
    return calendar.calendar_list_year_with_category(data)
        .then(function(list){
            console.log(list,list);
            return Promise.resolve({list : list});
        })
};

//return calendar.calendar_list(data)
//    .then(function(list) {
//        console.log(list, list);
//        return Promise.resolve({list: list});
//    });
