// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(function(require) {

    var self;

    /**
     * @constructor
     */
    function TodoController() {
        self = this;
    }

    var Controller = require("controller/Controller");

    // subclass extends superclass.
    TodoController.prototype = new Controller();
    TodoController.prototype.constructor = TodoController;


    /**
     *
     */
    TodoController.prototype.render = function(uri) {
        var leftbar = new (require("view/LeftbarView"));
        leftbar.main();

        // var todo = new (require("view/TodoView"));
        // todo.main();

        var topbar = new (require("view/TopbarView"));
        topbar.main();


        require(["require", "model/Todo", "view/TodoView"], function(require, Todo, TodoView) {
            Todo = new Todo();
            TodoView = new TodoView();
            TodoView.main();

            // Todo.getTodoList(TodoView.);


        });


    };


    return TodoController;

});