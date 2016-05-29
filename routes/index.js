var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/template/calendar', function(req, res, next) {
    res.render('template/calendar');
});
router.get('/template/todo', function(req, res, next) {
    res.render('template/todo');
});


router.get('/', function(req, res, next) {
    if(req.session.member_id){
        res.render('main');
    }
    else{
        res.render('login');
    }
//
//   var data = { title: 'Express' ,member_id : null,member_name : null};
//    if(member_id){
//        data.member_id = member_id;
//        data.member_id = member_name;
//
//    }
//    res.render('index', data);
});
//
//
//router.get('*', function(req, res, next) {
//    var member_id = req.session.member_id;
//    var member_name = req.session.member_name;
////    member_id = 5;
////    member_id = "root";
//    var data = { title: 'Express' ,member_id : null,member_name : null};
//    if(member_id){
//        data.member_id = member_id;
//        data.member_id = member_name;
//
//    }
//  res.render('index', data);
//});

router.get('/temp', function(req, res, next) {
    res.render('index', { title: 'Express!!' });
});
module.exports = router;
