(function () {
    "use strict";

    angular.module('lectorapp')
            .controller('newTutorLectorCtrl', newTutorLectorCtrl);

    newTutorLectorCtrl.$inject = ['$scope', '$route', 'newTutor', '$location'];

    function newTutorLectorCtrl($scope, $route, newTutor, $location) {
        $scope.addTutorial = function () {
            console.log($scope.tutorname);
            var el={
                tutorialName:$scope.tutorname,
                tutorialUrl:$scope.tutorialUrl,
                tutorialZip:$scope.tutorialZip
            };    
            newTutor.addTutorial(el);
            $location.path("#/");
        }
    }
})();


