(function () {
    "use strict";
    angular
            .module('lectorapp')
            .controller("signinCtrl", signinCtrl);

    signinCtrl.$inject = ["$scope", "$route", "$location", 'signinFactory'];

    function signinCtrl($scope, $route, $location, signinFactory) {

        $scope.send = function () {
            $scope.el = {
                email: $scope.register.email.$viewValue,
                password: $scope.register.password.$viewValue
            }
            signinFactory.adduser($scope.el);

            $scope.el = '';
            $route.reload();

        }
    }
})();