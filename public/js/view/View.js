/**
 * Created by user on 5/10/2016 010.
 */

define(["jquery"], function($) {

    var self;

    /**
     * @constructor
     */
    function View() {
        self = this;

    }

    View.prototype.event = {};

    /**
     *
     */
    View.prototype.bind_events = function() {
        for(key in this.event) {
            if(this.event.hasOwnProperty(key))
                this.event[key]();
        }
    };

    /**
     *
     */
    View.prototype.service_reset = function(service) {
        $.each(front.Config.get_view_components()[service], function(i, val) {
            $("#" + val).removeClass("no-show");
        });
    };


    /**
     *
     */
    View.prototype.toggle_loading = function(wrapper) {
        $(".loading", wrapper).toggleClass("no-show");
    };


    /**
     *
     * @param target
     * @param content
     * @returns {*|string|JQuery}
     */
    View.prototype.replace_by_selector = function(target, content) {

        $.each(content, function(selector, value) {
            if(value) {
                template.find(target).removeClass("no-show");
                template.find(target).html(value);
            }
        });

        // return without display: none.
        return template.html();
    };

    /**
     *
     */
    View.prototype.fill_in_skel = function($mother_skel, $target_skel, data_meta, class_name, data_wrap) {
        var skel = [];

        if(data_wrap.length != 0) {
            $.each(data_wrap, function(id, data) {
                skel += front.View.replace_by_data($target_skel.clone(), data_meta, data);
            });
            // Remove no-show only when there are values to fill.
            $($mother_skel).find(class_name).removeClass("no-show");
        }

        return skel;
    };

    /**
     *
     */
    View.prototype.replace_by_data = function(target, content, data) {

        $.each(content, function(name, value) {
            if(value && value.length != 0) {
                //console.log(data);
                //$target.html($target.html().replace(new RegExp(name, "g"), data[value]));
                target = target.replace(new RegExp(name, "g"), data[value]);
            }
        });
        return target;
    };

    /**
     *
     */
    View.prototype.create_html = function(target, data_meta, data_wrap) {

        var html = "";
        if(data_wrap.length != 0) {
            $.each(data_wrap, function(id, data) {
                //console.log(data)
                html += self.prototype.replace_by_data(target, data_meta, data);
            });
            // Remove no-show only when there are values to fill.
            //$($mother_skel).find(class_name).removeClass("no-show");
        }

        return html;
    };

    /**
     * Generate html.
     */
    View.prototype.replace_by_string = function($target, content) {

        $.each(content, function(name, value) {
            if(value && value.length != 0) {
                //console.log(name + " " + value);
                $target.html($target.html().replace(new RegExp(name, "g"), value));
                //target.html(target.html().replace(new RegExp("no-show", "g"), ""));
            }
        });
        return $target[0].outerHTML;
    };

    View.prototype.main = function() {
        console.log("main function not defined");
    }


    return View;

});