var rendering = require('./index');
var login = require('./ajax/login');
var logout = require('./ajax/logout');
var register = require('./ajax/register');
var category = require('./ajax/category');
var categoryList = require('./ajax/categoryList');
var calendar = require('./ajax/calendar');
var calendarCategory = require('./ajax/calendarCategory');
var todo = require('./ajax/todo');
var todoList = require('./ajax/todoList');
var todoTime = require('./ajax/todo_time');
var todo_search = require('./ajax/todo_search');


var routing = function(app,callback){
    app.use('/ajax/login', login);
    app.use('/ajax/logout', logout);
    app.use('/ajax/calendar', calendar);
    app.use('/ajax/calendar/category', calendarCategory);
    app.use('/ajax/register', register);
    app.use('/ajax/category', category);
    app.use('/ajax/category_list', categoryList);
    app.use('/ajax/todo', todo);
    app.use('/ajax/todo_list', todoList);
    app.use('/ajax/todo_time', todoTime);
    app.use('/ajax/todo_search', todo_search);
    app.use('/', rendering);
    if(callback){
        callback(null);
    }
};


module.exports = routing;
