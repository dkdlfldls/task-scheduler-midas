// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(["require", "jquery", "view/View", "vendor/Time"], function(require, $, View, Time) {


    var self;
    /**
     * @constructor
     */
    function TopbarView() {
        self = this;
        self.bind_events.call(self);
    };

    TopbarView.prototype = new View();
    TopbarView.prototype.constructor = TopbarView;


    TopbarView.prototype.event = {
    }


    TopbarView.prototype.main = function() {
        // $("#leftbar-wrap").removeClass("no-show");

        var time = new Time();
        today = time.getTime();

        // $("#todo-wrap").addClass("border-red");
        $(".year", ".topbar").html(today.year);
        $(".month", ".topbar").html(today.month);
        $(".day", ".topbar").html(today.day);

    };

    return TopbarView;

});