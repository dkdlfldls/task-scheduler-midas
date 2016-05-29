// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(["require", "jquery", "view/View", "model/Member"],
    function(require, $, View, Member) {

    var self;
    /**
     * @constructor
     */
    function CalendarView() {
        self = this;
        self.bind_events.call(self);
    };

    CalendarView.prototype = new View();
    CalendarView.prototype.constructor = CalendarView;

    /**
     *
     */
    // CalendarView.prototype.bind_events = function() {
    //     self.bind_events.call(self);
    // }

    CalendarView.prototype.event = {
        "temp": function() {
        }
    }

    CalendarView.prototype.main = function() {
        $("#cal-wrap").removeClass("no-show");
    };

    return CalendarView;

});