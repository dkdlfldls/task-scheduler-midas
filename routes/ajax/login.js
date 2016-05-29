var express = require('express');
var router = express.Router();
const userSvc = require('../../service/userSvc');
const warp = require('../../module/customFunc').wrapSuccess;
/* GET home page. */
router.post('/', function(req, res, next) {
    var data = {};
    data.email = req.body.email;
    data.password = req.body.password;

    userSvc.login(data)
    .then(function(result){
        req.session.member_id = result.member_id;
        req.session.name = result.name;
        console.log(result);
        res.json(warp(result));
    })
    .catch(function(err){
            next(err);
    })
});

module.exports = router;
