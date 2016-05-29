// This JavaScript file defines a module without any dependencies on other modules.
// The module returns an object that has a single method: 'getHello()'. Modules that load
// this module get passed a instance of this object.
define(["jquery", "view/View", "model/Member"], function($, View, Member) {


    var self;
    /**
     * @constructor
     */
    function LoginView() {
        self = this;
        self.bind_events.call(self);
    };

    LoginView.prototype = new View();
    LoginView.prototype.constructor = LoginView;

    /**
     * 
     */
    // LoginView.prototype.bind_events = function() {
    //     self.bind_events.call(self);
    // }

    LoginView.prototype.event = {
        "on_click_login": function() {
            $(".btn-login", "#login").on("click", function() {
                var member = new Member();

                var data = {
                    "email": $("#login-email").val(),
                    "password": $("#login-password").val()
                }

                member.login(data)



            });

        },
        "on_click_register_in_login_form": function() {
            $(".btn-register", ".login-form").on("click", function() {
                $(".login-form").addClass("no-show");
                $(".register-form").removeClass("no-show");
            });

        },

        "on_click_register_in_register_form": function() {
            $(".btn-register", ".register-form").on("click", function() {
                var member = new Member();

                var data = {
                    "email": $("#register-email").val(),
                    "password": $("#register-password").val(),
                    "name": $("#register-name").val()
                }

                member.register(data)

            });

        }
    }


    LoginView.prototype.main = function() {
        $("#login-wrap").removeClass("no-show");
    };

    return LoginView;

});