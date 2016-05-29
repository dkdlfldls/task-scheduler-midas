var express = require('express');
var router = express.Router();
const calendarSvc = require('../../service/calendarSvc');
const warp = require('../../module/customFunc').wrapSuccess;

router.get('/:year/:month', function(req, res, next) {
    var data = {};
    data.year = req.params.year;
    data.month = req.params.month;
    data.member_id = req.session.member_id;
    console.log(data);
    calendarSvc.calendar_list_month(data)
        .then(function(result){
            console.log(result);
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })
});

router.get('/:year', function(req, res, next) {
    var data = {};
    data.year = req.params.year;
    data.member_id = req.session.member_id;
    console.log(data);
    calendarSvc.calendar_list_year(data)
        .then(function(result){
            console.log(result);
            res.json(warp(result));
        })
        .catch(function(err){
            next(err);
        })
});


module.exports = router;
