/**
 * Created by asd on 2016-05-28.
 */
const todo = require('../models/todo'); //


exports.add_todo = function(data) {
    return todo.add_todo(data)
}

exports.update_todo = function(data) {
    return todo.update_todo(data)
}

exports.update_todo_time = function(data) {
    return todo.update_todo_time(data)
}

exports.delete_todo = function(data) {
    return todo.delete_todo(data)
}

exports.get_todo_list= function(data){
    return todo.get_todo_list(data)
        .then(function(result){
            console.log(result);
            var list = {};
            list.todo = [];
            list.in_progress = [];
            list.done = [];
            result.forEach(function(todo){
                if(todo.status_id == 0){
                    list.todo.push(todo);
                }
                else if(todo.status_id == 1){
                    list.in_progress.push(todo);
                }
                else if(todo.status_id == 2){
                    list.done.push(todo);
                }
            });
            console.log(list);

            return Promise.resolve(list);
        })
}

exports.todo_search = function(data){
    return todo.todo_search(data)
}