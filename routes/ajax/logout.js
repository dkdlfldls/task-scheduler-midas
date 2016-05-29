var express = require('express');
var router = express.Router();
const userSvc = require('../../service/userSvc');
const warp = require('../../module/customFunc').wrapSuccess;
/* GET home page. */
router.post('/', function(req, res, next) {

    delete req.session.member_id;
    var result = {};
    res.json(warp(result));
});

module.exports = router;
