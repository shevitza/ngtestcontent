(function () {
    "use strict";
    angular.module('lectorapp')
            .controller('editLectorCtrl', editLectorCtrl);
    editLectorCtrl.$inject = ['$scope', '$routeParams', 'lectorEdit', '$route', 'middle', '$location'];

    function editLectorCtrl($scope, $routeParams, lectorEdit, $route, middle, $location) {

        lectorEdit.find($routeParams.id, function (tutor) {
            $scope.tutor = tutor;
        });
        lectorEdit.wrong($routeParams.id, function (w) {
            $scope.wronganswers = w;
        });
        lectorEdit.getTestById($routeParams.id, function (an) {
            for (var i = 0; i < an.length; i++) {
                an[i].val = an[i].TutorialID + '-' + an[i].LeftID + '-' + an[i].MiddleID + '-' + an[i].RightID;
            }
            if (an.length > 0) {
                $scope.notSentence = false
            } else {
                $scope.notSentence = true;
            }
            $scope.answers = an;
        });
        middle.list(function (m) {
            $scope.middle = m;
        });

        $scope.deleteAnswer = function () {
            var arr = ($scope.answerValue).split('-');
            $scope.el = {
                tutorialID: arr[0],
                leftID: arr[1],
                middleID: arr[2],
                rightID: arr[3]
            }

            if (confirm("Are you sure?")) {
                lectorEdit.deleteAnswer($scope.el);
            }
            $scope.el = '';
            $route.reload();
        }

        $scope.addSentence = function () {
            $scope.el = {
                t: $routeParams.id,
                leftContent: $scope.leftContent,
                m: $scope.mid,
                rightContent: $scope.rightContent
            }
            console.log($scope.el);
            lectorEdit.addSentence($scope.el);
            $route.reload();
        }
        $scope.deleteTutorial = function () {
            if (confirm("Are you sure you want to delete this tutorial?")) {
                lectorEdit.deleteTutorial($routeParams.id);
                $location.path('#/');
            }
        }

        $scope.updateTutorial = function () {

            $scope.el = {
                tutorialName: $scope.tutorname,
                tutorialUrl: $scope.tutorialUrl,
                tutorialZip: $scope.tutorialZip,
                TutorialID: $routeParams.id
            }
            console.log($scope.el);
            lectorEdit.updateTutorial($scope.el);
            $route.reload();
        }

    }

})();


