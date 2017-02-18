
(function () {
    "use strict";
    angular
            .module('lectorapp')
            .factory('signinFactory', signinFactory);
    signinFactory.$inject = ['$http'];

    function signinFactory($http) {
        return {
            adduser: adduser,
            alreadyhas: alreadyhas
        };
        function adduser(el) {
            $http({
                method: 'POST',
                url: 'db/add_user.php',
                data: el
            })
                    .then(function (status) {

                        return status.data;
                    });

        }
        function alreadyhas(email) {
            $http({
                method: 'GET',
                url: 'db/already_has.php/' + email
            })
                    .then(function (results) {
                        return results.data.status;
                    });
        }
    }

})();


