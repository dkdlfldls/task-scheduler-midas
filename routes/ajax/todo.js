var express = require('express');
var router = express.Router();
const todoSvc = require('../../service/todoSvc');
const warp = require('../../module/customFunc').wrapSuccess;


router.get('/:todo_id', function(req, res, next) {
    var data = {};
    data.todo_id = req.params.todo_id;
    data.member_id = req.session.member_id;

    todoSvc.get_todo(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })

});

router.post('/', function(req, res, next) {
    var data = {};
    data.title = req.body.title;
    data.content = req.body.content;
    data.start_time = req.body.start_time;
    data.end_time = req.body.end_time;
    data.category_id = req.body.category_id;

    data.member_id = req.session.member_id;

    todoSvc.add_todo(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })

});

router.put('/', function(req, res, next) {
    var data = {};
    data.title = req.body.title;
    data.content = req.body.content;
    data.todo_id = req.body.todo_id;
    data.start_time = req.body.start_time;
    data.end_time = req.body.end_time;
    data.category_id = req.body.category_id;

    data.member_id = req.session.member_id;

    todoSvc.update_todo(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })

});

router.delete('/', function(req, res, next) {
    var data = {};
    data.todo_id = req.body.todo_id;
    data.member_id = req.session.member_id;

    todoSvc.delete_todo(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })

});

module.exports = router;
