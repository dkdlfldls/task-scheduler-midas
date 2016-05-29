var express = require('express');
var router = express.Router();
const todoSvc = require('../../service/todoSvc');
const warp = require('../../module/customFunc').wrapSuccess;


router.put('/', function(req, res, next) {
    var data = {};
    data.todo_id = req.body.todo_id;
    data.start_time = req.body.start_time;
    data.end_time = req.body.end_time;
    data.member_id = req.session.member_id;

    todoSvc.update_todo_time(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })

});


module.exports = router;
