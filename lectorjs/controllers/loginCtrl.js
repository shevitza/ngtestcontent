(function () {
    "use strict";
    angular.module('lectorapp')
            .controller('loginCtrl', loginCtrl);
    loginCtrl.$inject = ['$scope', '$routeParams', '$route', '$location', '$cookies', 'loginFactory'];
    function loginCtrl($scope, $routeParams, $route, $location, $cookies, loginFactory) {

        $scope.checkUser = function () {
            var userData = {
                email: $scope.email,
                password: $scope.password
            }
             loginFactory.isUser(userData);
             if($cookies.get('isLoged')=='success'){
                 $location.path('/');
             }
        }

    }
})();
