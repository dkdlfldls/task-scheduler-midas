"use strict";

const member = require('../models/member');
const bcrypt = require('bcryptjs');

exports.login = function(data) {
    return member.login(data)
        .then(function(result){
            return new Promise(function(resolve,reject){
                var retData = {};
                var member_id = null;
                if(result && result.length ==1 ){

                    // bcrypt 비교
                    let password = data.password;
                    let hash = result[0].password;
                    console.log(password,hash);
                    let confirm = bcrypt.compareSync(password,hash);

                    if(confirm){
                        member_id = result[0].member_id;
                        var name = result[0].name;
                        retData.member_id = member_id;
                        retData.name = name;
                        resolve(retData);
                    }

                    else{
                        reject(new Error("login fail"));
                    }

                }
                else{
                    reject(new Error("login fail"));
                }
            })
        }
        )
}

exports.member_regist = function(data) {
    var salt = bcrypt.genSaltSync(10);
    data.hash = bcrypt.hashSync(data.password, salt);

    return member.member_regist(data)

}