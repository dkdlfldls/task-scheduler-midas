var app = angular.module('web4team', ['ngRoute','ui.calendar']);


app.factory('todoSvc',function(){
    var Svc = {};
    Svc.id = null;
    return Svc;
})
app.run(function($http,$rootScope,$location,todoSvc,$route){
    $rootScope.goTodo = function(cate_id){
        todoSvc.id = cate_id;
        $location.path('todo');
        $route.reload();

    }

    $http.get('/ajax/get_session').then(function successCallback(res) {
        if(res.data.success){
            $rootScope.userName = res.data.data.name;
            $rootScope.userId = res.data.data.member_id;
        }
    }, function errorCallback(response) {
    });


})
app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            redirectTo: '/calendar'
        })

        .when('/calendar', {
            templateUrl: '/template/calendar',
            controller: 'calenderCtrl'
        })

        // route for the about page
        .when('/todo', {
            templateUrl: '/template/todo',
            controller: 'todoCtrl'
        })

        .otherwise({
            redirectTo: '/calendar'
        });

});



app.controller('leftbarCtrl',function($scope,$http,$window) {
    $scope.list = [];
    $scope.subNavShow = false;

    $scope.getList = function(){
        $http.get('/ajax/category_list',{}).then(function successCallback(res) {
            console.log(res)
            if(res.data.success){
                $scope.list = res.data.data;


//                {
//                    id: 4,
//                        title: 'Conf',
//                    start: '2016-05-11',
//                    end: '2016-05-13'
//                }

            }
        }, function errorCallback(response) {
        });
    }

    $scope.create_category = function(title,content){
        $http.post('/ajax/category',{title : title,content : content}).then(function successCallback(res) {
            console.log(res)
            if(res.data.success){
                $scope.list = res.data.data;
            }
        }, function errorCallback(response) {
        });
    }

    $scope.modify_category = function(catetitle,content){
        $http.put('/ajax/category',{title : title,content : content}).then(function successCallback(res) {
            console.log(res)
            if(res.data.success){
                $scope.list = res.data.data;
            }
        }, function errorCallback(response) {
        });
    }
})


app.controller('calenderCtrl',function($scope,$http,$window) {
    $scope.list = [];
    $scope.subNavShow = false;
    $scope.info = {};
    $scope.info.list= [];
//    $scope.eventSources = [];
    $scope.events = [];
    $scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic"
//        className: 'gcal-event',           // an option!
//        currentTimezone: 'America/Chicago' // an option!
    };
    $scope.eventsF = function (start, end, timezone, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
        callback(events);
    };

    $scope.eventSources = [$scope.events, $scope.eventSource,$scope.eventsF];

    $scope.uiConfig = {
        calendar: {
            height: 650,
            editable: true,
            header: {
                left: '',
                center: 'title',
                right: ''
            }
        }
    };

    $scope.init = function(){
        var year = new Date().getFullYear();
        var month =new Date().getMonth()+1;
        console.log(month);
        $scope.getCalList(year,month);
    }
    $scope.getCalList = function(year,month){
        var base = "/ajax/calendar/";
        var url = base+year+'/'+month;
        $http.get(url,{}).then(function successCallback(res) {
            console.log("res",res);
            if(res.data.success){
                $scope.list = res.data.data.list;
                console.log($scope.list);
                console.log(res.data);

                $scope.list.forEach(function(obj){
                    console.log("obj",obj);
                    $scope.events.push({
                        title : obj.title,
                        id : obj.todo_id,
                        start : obj.start_time,
                        end : obj.end_time
                    });
                })
                console.log($scope.eventSources);
//                $scope.$apply();
//                console.log($scope.eventSources);
            }
        }, function errorCallback(response) {
        });
    };

    $scope.getTodo = function(todo_id){
        var base = "/ajax/todo/";
        var url = base+todo_id;
        $http.get(url,{}).then(function successCallback(res) {
            console.log(res)
            if(res.data.success){
                $scope.list = res.data.data;
            }
        }, function errorCallback(response) {
        });
    }


})

app.controller('todoCtrl',function($scope,$http,todoSvc,$route) {
    $scope.todo = {};
    $scope.modalShow = false;
    $scope.init = function() {
        var cate_id = todoSvc.id;
        var base = "/ajax/todo_list/";
        var url = base + cate_id;
        $http.get(url, {}).then(function successCallback(res) {
            console.log("res", res);
            if (res.data.success) {
                $scope.todo = res.data.data;
                console.log($scope.todo);
            }
        });
    }
    $scope.writeInfo = {};
    $scope.writeTodo = function() {
        var url = "/ajax/todo";
        $http.post(url,
            {
                title : $scope.writeInfo.title,
                content : $scope.writeInfo.content,
                start_time : $scope.writeInfo.start_time,
                end_time : $scope.writeInfo.end_time,
                category_id : todoSvc.id
            }).then(function successCallback(res) {
                console.log("res", res);
                if (res.data.success) {
                    $route.reload();
                }
            });
    }


    $scope.modifyInfo = {};
    $scope.modifyTodo = function() {
        var url = "/ajax/todo";
        $http.put(url,
            {
                todo_id : $scope.modifyInfo.todo_id,
                title : $scope.modifyInfo.title,
                content : $scope.modifyInfo.content,
                status_id : $scope.modifyInfo,status_id,
                start_time : $scope.modifyInfo.start_time,
                end_time : $scope.modifyInfo.end_time,
                category_id : todoSvc.id
            }).then(function successCallback(res) {
                console.log("res", res);
                if (res.data.success) {
                    $route.reload();
                }
            });
    }

    $scope.setTodo = function(item) {
        var url = "/ajax/todo";
        $http.put(url,
            {
                todo_id : item.todo_id,
                title : item.title,
                content : item.content,
                status_id : 0,
                start_time : item.start_time,
                end_time : item.end_time,
                category_id : item.category_id
            }).then(function successCallback(res) {
                console.log("res", res);
                if (res.data.success) {
                    $route.reload();
                }
            });
    }

    $scope.setInProgress = function(item) {
        console.log(todoSvc.id);
        var url = "/ajax/todo";
        $http.put(url,
            {
                todo_id : item.todo_id,
                title : item.title,
                content : item.content,
                status_id : 1,
                start_time : item.start_time,
                end_time : item.end_time,
                category_id : item.category_id
            }).then(function successCallback(res) {
                console.log("res", res);
                if (res.data.success) {
                    $route.reload();
                }
            });
    }

    $scope.setDone = function(item) {
        var url = "/ajax/todo";
        $http.put(url,
            {
                todo_id : item.todo_id,
                title : item.title,
                content : item.content,
                status_id : 2,
                start_time : item.start_time,
                end_time : item.end_time,
                category_id : item.category_id
            }).then(function successCallback(res) {
                console.log("res", res);
                if (res.data.success) {
                    $route.reload();
                }
            });
    }


    $scope.delTodo = function(item) {
        console.log("delete",item);
        var url = "/ajax/todo/del";
        $http.post(url,
            {
                todo_id : item.todo_id
            }).then(function successCallback(res) {
                console.log("res", res);
                if (res.data.success) {
                    $route.reload();
                }
            });
    }

})



