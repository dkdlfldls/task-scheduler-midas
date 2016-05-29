// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(function(require) {

    var self;

    /**
     * @constructor
     */
    function CalendarController() {
        self = this;
    }

    var Controller = require("controller/Controller");

    // subclass extends superclass.
    CalendarController.prototype = new Controller();
    CalendarController.prototype.constructor = CalendarController;


    /**
     *
     */
    CalendarController.prototype.render = function(uri) {

        // var leftbar = new (require("view/LeftbarView"));


        var calendar = new (require("view/CalendarView"));
        calendar.main();

        var topbar = new (require("view/TopbarView"));
        topbar.main();

        require(["require", "view/LeftbarView", "model/Category"], function(require, LeftbarController, Category) {
            var leftbar = new LeftbarController();
            leftbar.main();

            var category = new Category();
            category.get_category_list(function(data) {
                console.log(data.data)
            })




            // TodoView = new TodoView();
            // TodoView.main();


            // Todo.getTodoList(TodoView.);


        });


    };


    return CalendarController;

});