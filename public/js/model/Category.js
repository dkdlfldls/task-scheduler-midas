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
    function Category() {
        self = this;
    };

    /**
     *
     */
    Category.prototype.constructor = Category;

    /**
     *
     */
    Category.prototype.get_category_list = function(callback) {
        var url = "/ajax/category_list";

        $.ajax({
            method: "GET",
            url: url,
            dataType: "json",
            success: callback,
            error: function() {return 404;}
        });
    }


    return Category;

});