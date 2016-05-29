// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(["require", "jquery", "view/View", "model/Member"],
    function(require, $, View, Member) {

    var self;
    /**
     * @constructor
     */
    function TodoView() {
        self = this;
        self.bind_events.call(self);
    };

    TodoView.prototype = new View();
    TodoView.prototype.constructor = TodoView;

    /**
     *
     */
    // TodoView.prototype.bind_events = function() {
    //     self.bind_events.call(self);
    // }

    TodoView.prototype.event = {
        "temp": function() {
        }
    }

    TodoView.prototype.main = function() {
        $("#todo-wrap").removeClass("no-show");




    };

    TodoView.prototype.render_todo_list = function(data) {
        var todo = data.data;




    };

    return TodoView;

});