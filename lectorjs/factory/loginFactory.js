(function () {
    "use strict";
    angular.module('lectorapp')
            .factory('loginFactory', loginFactory);
    loginFactory.$inject = ['$http', '$cookies', '$location'];
    function loginFactory($http, $cookies,$location) {
        return{
            isUser: isUser,
            checkPermission:checkPermission
        }

//        function isUser(user) {
//            var customer = {};
//            $http({
//                method: 'POST',
//                url: 'db/check_user.php/',
//                data: user
//            }).success(function (data) {
//                angular.copy(data, customer);
//
//            });
//           return customer;
//        }
        function isUser(user) {
            $http({
                method: 'POST',
                url: 'db/check_user.php/',
                data: user
            }).success(function (response) {
                if (response.status == 'success') {
                    $cookies.put('isLoged', 'success');
                    $location.path('/');
                }
                if (response.status == 'error') {
                    $cookies.put('isLoged', 'error');
                }
            });
        }
        
        function checkPermission(){
            if($cookies.get('isLoged')=='success'){
                
                return true;
            }
            return false;
        }
    }


})();

