(function () {
    "use strict";
     
      angular.module('lectorapp')
            .controller('logoutCtrl', logoutCtrl);
    logoutCtrl.$inject = ['$scope','$location', '$cookies'];

    function logoutCtrl($scope, $location, $cookies) {

        $scope.logout = function () {
            $cookies.put('isLoged', '');
            $location.path("\login");
        }

    }
})();

