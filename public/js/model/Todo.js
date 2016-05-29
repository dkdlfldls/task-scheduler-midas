/**
 * Created by user on 5/28/2016 028.
 */
// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(["require", "jquery"], function(require, $) {


    var self;
    /**
     * @constructor
     */
    function Member() {
        self = this;
    };

    /**
     *
     */
    Member.prototype.constructor = Member;

    /**
     *
     */

//    {
//        "title": "aaa",
//        "todo_id": 13,
//        "start_time": "2003-12-31T01:02:03.000Z",
//        "end_time": "2005-03-31T04:05:43.000Z",
//        "name": "김성민"
//    },


    Member.prototype.read_calendar = function(data) {
        console.log(data);
        var year = data.year;
        var month = data.month;
        var url ="/ajax/todo_time";
        url+=('/'+year+'/'+month);

        $.ajax({
            method: "GET",
            url: url,
            dataType: "json",
            success: function() {
//                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }

    Member.prototype.update_todo_time = function(data) {
        console.log(data)
        var todo_id = data.todo_id;
        var start_time = data.start_time;
        var end_time = data.end_time;

        $.ajax({
            method: "PUT",
            url: "/ajax/todo_time",
            data: {"todo_id": todo_id, "start_time": start_time,"end_time": end_time},
            dataType: "json",
            success: function() {
//                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }


    Member.prototype.read_todo_list = function(data) {
        var url = "/ajax/todo_list";
        var category_id = data.category_id;
        if(category_id){
            url += '/'+category_id;
        }
        $.ajax({
            method: "GET",
            url: url,
            dataType: "json",
            success: function() {
//                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }

    Member.prototype.create_todo = function(data) {
        var title = data.title;
        var content = data.content;
        var start_time = data.start_time;
        var end_time = data.end_time;
        var categoriy_id = data.category_id;


        $.ajax({
            method: "POST",
            url: "/ajax/todo",
            data: {"title": title,"content":content,"category_id":categoriy_id, "start_time": start_time,"end_time": end_time},
            dataType: "json",
            success: function() {
//                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }

    Member.prototype.read_todo = function(data) {
        var url = "/ajax/todo";
        var todo_id = data.id;
        if(todo_id){
            url += '/'+todo_id;
        }
        $.ajax({
            method: "GET",
            url: url,
            dataType: "json",
            success: function() {
//                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }


    Member.prototype.update_todo = function(data) {
        var todo_id = data.todo_id;
        var title = data.title;
        var content = data.content;
        var start_time = data.start_time;
        var end_time = data.end_time;
        var categoriy_id = data.category_id;
        var status_id = data.status_id;


        $.ajax({
            method: "POST",
            url: "/ajax/todo",
            data: {"todo_id":todo_id,"title": title,"content":content,"category_id":categoriy_id, "start_time": start_time,"end_time": end_time,"status_id":status_id},
            dataType: "json",
            success: function() {
//                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }

    Member.prototype.del_todo_list = function(data) {
        $.ajax({
            method: "DELETE",
            url: "/ajax/todo_list",
            data: {"todo_id": data.todo_id},
            dataType: "json",
            success: function() {
//                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }



    return Member;

});