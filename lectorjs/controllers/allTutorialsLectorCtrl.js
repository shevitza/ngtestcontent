(function () {
    "use strict";
    angular
            .module("lectorapp")
            .controller('allTutorialsLectorCtrl', allTutorialsLectorCtrl);

    allTutorialsLectorCtrl.$inject = ["$scope", "tutorials"];
       
    function allTutorialsLectorCtrl($scope, tutorials) {
        tutorials.list(function (tutorials) {
            $scope.tutorials = tutorials;
        });
    }
})();




