/**
 * Created by user on 5/10/2016 010.
 */

define(function(require) {

    var self;

    /**
     * @constructor
     */
    function Time() {
        self = this;
    }

    Time.prototype.event = {};

    Time.prototype.getTime = function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = {
            month: mm,
            day: dd,
            year: yyyy
        };

        return today;

    };

    return Time;

});