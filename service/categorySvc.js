const category = require('../models/category');
const categoryMember = require('../models/categoryMember');
const sequelize = require('../models/sequelize').sequelize;

exports.create_category = function(data) {
    return sequelize.transaction(function(t){
        return category.create_category(data,t)
            .then(function(category_id){
                data.category_id = category_id;
                return categoryMember.add_member(data,t);
            })
    })


};


exports.update_category = function(data) {
    return category.update_category(data)
};

exports.delete_category = function(data) {
    return category.delete_category(data)
};

exports.get_category_list = function(data) {
    return category.get_category_list(data)
        .then(function(result){
            return Promise.resolve(result);
        })
};