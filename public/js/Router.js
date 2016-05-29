// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(["require", "jquery"], function (require, $) {


    var self;

    /**
     * @constructor
     */
    function Router() {
        self = this;
        self.init();
    }

    // var self = Router;
    Router.prototype.constructor = Router;


    /**
     * @type {Array}
     */
    Router.prototype.uri_req = [];
    Router.prototype.uri_param = {};
    Router.prototype.session = false;


    /**
     * Initializer.
     */
    Router.prototype.init = function() {
        self.uri_req = self.parse_uri(decodeURIComponent(window.location.pathname));
        self.uri_param = self.getJsonFromUrl();

    };

    /**
     *
     */
    Router.prototype.hasSession = function() {
        return ($(".id", "#session").html());
    };

    /**
     *
     */
    Router.prototype.route = function() {

        var controller = "controller/";

        // console.log(self.hasSession())
        // Session check, if there is not session, redirect to login page.
        if(!self.hasSession() && self.uri_req[1] != "login" && self.uri_req[1] != "register") {
            window.location.href = "http://52.79.47.242:3000/login";
            console.log(3);
        }
        else if(self.uri_req[1] === "login") controller += "LoginController";
        else if(self.uri_req[1] === "register") controller += "RegisterController";
        else if(self.uri_req[1] === "todo") controller += "TodoController";
        else if(self.uri_req[1] === "calendar") controller += "CalendarController"
        else if(self.hasSession() && self.uri_req[1] === "") controller += "CalendarController";


        // var Ctrl = "controller/" + route[self.prototype.uri_req[1]]["ctrl"];
        //
        require(["require", controller], function(require) {

            var ctrl = new (require(controller));
            ctrl.render();
        });

    };

    /**
     * @returns {Array}
     */
    Router.prototype.parse_uri = function(uri) {
        return uri.split("/");
    };


    /**
     *
     * @returns {{}}
     */
    Router.prototype.getJsonFromUrl = function() {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
            var item = part.split("=");

            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    };


    return Router;

});