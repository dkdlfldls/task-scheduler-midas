var express = require('express');
var router = express.Router();
const categorySvc = require('../../service/categorySvc'); //
const warp = require('../../module/customFunc').wrapSuccess;
/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {};
    data.member_id = req.session.member_id;

    categorySvc.get_category_list(data) //
        .then(function(result){
            res.json(warp(result)); 
        })
        .catch(function(err){
            next(err);
        })
});

module.exports = router;