(function () {
    "use strict";
    angular
            .module("lectorapp")
            .factory('lectorEdit', lectorEdit);
    lectorEdit.$inject = ['$http'];
    function lectorEdit($http) {
        var obj = {
            list: getData,
            find: find,
            getTestById: getTestById,
            deleteAnswer: deleteAnswer,
            wrong: wrongAnswers,
            addSentence: addSentence,
            deleteTutorial: deleteTutorial,
            updateTutorial: updateTutorial
        };
        return obj;

        function getData(callback) {
            $http({
                method: 'GET',
                url: 'db/all_tutorials.php',
                cashe: true
            }).success(callback);
        }
        function addSentence(el) {
            console.log(el);
            $http({
                method: 'POST',
                url: 'db/add_sentence.php',
                data: el
            }).then(function (status) {
                return status.data;
            });

        }
        function find(id, callback) {
            getData(function (data) {
                var tutor = data.filter(function (entry) {
                    return entry.TutorialID === id;
                })[0];
                callback(tutor);
            });
        }
        function getTestById(id, callback) {
            $http({
                method: 'GET',
                url: "db/testById.php/?id=" + id,
                cashe: true
            }).success(callback);
        }

        function deleteAnswer(el) {

            $http({
                method: 'POST',
                url: "db/delete_answer.php",
                data: el
            }).then(function (status) {
                return status.data;
            });
        }
        function wrongAnswers(id, callback) {
            $http({
                method: 'GET',
                url: 'db/wrong_answers.php/?id=' + id,
                cashe: true
            }).success(callback);
        }

        function deleteTutorial(id) {
            $http({
                method: 'POST',
                url: 'db/delete_tutorial.php',
                data: id
            }).then(function (status) {
                return status.data;
            });
        }

        function updateTutorial(el) {
            $http({
                method: 'POST',
                url: 'db/update_tutorial.php',
                data: el
            }).then(function (status) {
                return status.data;
            });

        }

    }
})();



