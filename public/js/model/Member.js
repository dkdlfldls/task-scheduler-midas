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
    Member.prototype.login = function(data) {
        console.log(data)

        $.ajax({
            method: "POST",
            url: "/ajax/login",
            data: {"email": data.email, "password": data.password},
            dataType: "json",
            success: function(data) {
                console.log(data)
                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }

    Member.prototype.register = function(data) {
        console.log("in-register",data);

        $.ajax({
            method: "POST",
            url: "/ajax/register",
            data: {"email": data.email, "password": data.password,"name":data.name},
            dataType: "json",
            success: function() {
                window.location.href = "/";
            },
            error: function() {return 404;}
        });

    }


    return Member;

});