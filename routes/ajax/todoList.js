var express = require('express');
var router = express.Router();
const todoSvc = require('../../service/todoSvc');
const warp = require('../../module/customFunc').wrapSuccess;


router.get('/:category_id', function(req, res, next) {
    var data = {};
    data.category_id = req.params.category_id;
    data.member_id = req.session.member_id;

    todoSvc.get_todo_list(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })

});


module.exports = router;
