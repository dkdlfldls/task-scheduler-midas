// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(["require", "jquery", "view/View"], function(require, $, View) {


    var self;
    /**
     * @constructor
     */
    function LeftbarView() {
        self = this;
        self.bind_events.call(self);
    };

    LeftbarView.prototype = new View();
    LeftbarView.prototype.constructor = LeftbarView;

    /**
     * 
     */
    // LeftbarView.prototype.bind_events = function() {
    //     self.bind_events.call(self);
    // }

    LeftbarView.prototype.event = {
        "on_click_calendar": function() {
            $(".calendar", "#leftbar").on("click", function() {
                // window.location.href = "/calendar";
                require(["require", "controller/CalendarController"], function(require, Cal) {
                    history.pushState('', 'Calendar', "/calendar");
                    $("#main").children().addClass("no-show")
                    var cal = new Cal();
                    cal.render();

                });


            });
        },
        "on_click_todo": function() {
            $(".category", "#leftbar").on("click", function() {
                // window.location.href = "/todo";
                require(["require", "controller/TodoController"], function(require, Todo) {
                    history.pushState('', 'To Do', "/todo");
                    $("#main").children().addClass("no-show")
                    var todo = new Todo();
                    todo.render();

                });

            });
        }
    }


    LeftbarView.prototype.main = function() {
        $("#leftbar-wrap").removeClass("no-show");




    };

    return LeftbarView;

});