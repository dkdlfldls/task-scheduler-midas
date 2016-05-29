// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(function(require) {

    var self;

    /**
     * @constructor
     */
    function HomeController() {
        self = this;
        self.init();
    }

    var Controller = require("controller/Controller");

    // subclass extends superclass.
    HomeController.prototype = new Controller();
    HomeController.prototype.constructor = TermController;

    HomeController.prototype.init = function() {
        
    }


    /**
     *
     */
    HomeController.prototype.render = function(uri) {
        console.log(11);

    };


    return HomeController;

});