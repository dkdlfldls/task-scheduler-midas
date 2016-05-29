var app = angular.module('web4team-login', []);

app.controller('loginCtrl',function($scope,$http,$window) {
    $scope.showLoginForm = true;
    $scope.init = function(){
        console.log($scope.showLoginForm);
    };
    $scope.loginInfo = {};
    $scope.loginInfo.email = null;
    $scope.loginInfo.password = null;

    $scope.regInfo = {};
    $scope.regInfo.email = null;
    $scope.regInfo.password = null;
    $scope.regInfo.name = null;

    $scope.login = function(){
        $http.post('/ajax/login',{
            email:$scope.loginInfo.email,
            password : $scope.loginInfo.password
        }).then(function successCallback(res) {
            console.log(res)
            if(res.data.success){
                $window.location.reload();
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }


    $scope.register = function(){
        console.log("보냄");
        $http.post('/ajax/register',{
            email:$scope.regInfo.email,
            password : $scope.regInfo.password,
            name : $scope.regInfo.name
        }).then(function successCallback(res) {
            console.log("보냄2");
            if(res.data.success){
                $window.location.reload();
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.showRegister = function(){
        $scope.showLoginForm = false;
    }
})

