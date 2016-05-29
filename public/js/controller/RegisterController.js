// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(function(require) {

    var self;

    /**
     * @constructor
     */
    function RegisterController() {
        self = this;
    }

    var Controller = require("controller/Controller");

    // subclass extends superclass.
    RegisterController.prototype = new Controller();
    RegisterController.prototype.constructor = RegisterController;


    /**
     *
     */
    RegisterController.prototype.render = function(uri) {
        // var LoginView = require("view/LoginView");
        require(["require"], function(require) {
            var LoginView = new (require("view/RegisterView"));
            LoginView.main();
        });


    };


    return RegisterController;

});