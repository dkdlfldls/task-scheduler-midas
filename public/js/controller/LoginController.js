// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(function(require) {

    var self;

    /**
     * @constructor
     */
    function LoginController() {
        self = this;
    }

    var Controller = require("controller/Controller");

    // subclass extends superclass.
    LoginController.prototype = new Controller();
    LoginController.prototype.constructor = LoginController;


    /**
     *
     */
    LoginController.prototype.render = function(uri) {
        // var LoginView = require("view/LoginView");
        require(["require"], function(require) {
            var LoginView = new (require("view/LoginView"));
            LoginView.main();
        });


    };


    return LoginController;

});