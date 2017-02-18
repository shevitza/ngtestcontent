(function () {
    "use strict";
    angular
            .module('lectorapp')
            .factory('newTutor', newTutor);
    newTutor.$inject = ['$http'];
    function newTutor($http) {
        var data = {
            addTutorial: addTutorial

        }
        function addTutorial(el) {
        console.log(el);
            $http({
                method: 'POST',
                url: 'db/add_tutorials.php',
                data: el
            }).then(function (status) {
                return status.data;
            });
        }
        return data;
    }
    



})();

