"use strict";

const app = require('./app.js');
var server = null;
const async = require('async');
const http = require('http');


console.log('[APP] Starting server initialization');

// Initialize Modules

async.series([
        function(cb) {
//            var port = nconf.get("PORT");
            server = http.createServer(app);
            server.listen(8080,cb);
        }
    ], function(err) {
        if (err) {
            console.log('[APP] initialization failed', err);
        } else {
            console.log('[APP] initialized SUCCESSFULLY');
        }
    }
);
