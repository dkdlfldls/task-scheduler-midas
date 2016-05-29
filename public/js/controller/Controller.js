// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(function(require) {

    /**
     * @constructor
     */
    function Controller() {

    }

    Controller.prototype.temp = function() {
        console.log("controller");
    };



    return Controller;
});