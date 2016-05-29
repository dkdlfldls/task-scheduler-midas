var express = require('express');
var router = express.Router();
const userSvc = require('../../service/userSvc');
const categorySvc = require('../../service/categorySvc');
const warp = require('../../module/customFunc').wrapSuccess;

/* GET home page. */
/* GET home page. */
router.post('/test', function(req, res, next) {
    req.session.member_id = 1;
    res.json({id:1});
});

router.post('/', function(req, res, next) {
    var data = {};
    console.log(req.body);
    data.title = req.body.title;
    data.content = req.body.content;
    data.member_id = req.session.member_id;

    categorySvc.create_category(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })
});


/* GET home page. */
//todo : vaildate 유저
router.put('/', function(req, res, next) {
    var data = {};
    data.category_id = req.body.category_id;
    data.title = req.body.title;
    data.content = req.body.content;
    data.member_id = req.session.member_id;

    categorySvc.update_category(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })
});

router.delete('/', function(req, res, next) {
    var data = {};
    data.category_id = req.body.category_id;
    data.member_id = req.session.member_id;

    categorySvc.delete_category(data)
        .then(function(result){
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })
});


module.exports = router;
