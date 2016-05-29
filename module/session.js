
var session = require('express-session');


var session_setting = function(app){
    app.use(session(
        {
            secret: 'midas',
            saveUninitialized: false,
            resave: true
        }
    ));
}

module.exports= session_setting;
