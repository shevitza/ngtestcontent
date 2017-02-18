app.factory('tutorials', ['$http', function ($http) {
        function getData(callback) {
            $http({
                method: 'GET',
                url: 'db/all_tutorials.php',
                cashe: true
            }).success(callback);
        }

        return {
            list: getData,
            find: function (id, callback) {
                getData(function (data) {
                    var tutor = data.filter(function (entry) {
                        return entry.TutorialID === id;
                    })[0];
                    callback(tutor);
                });
            }
        };
    }]);

app.factory('test', ['$http', function ($http, id) {
        function getData(id, callback) {
            $http({
                method: 'GET',
                url: "db/testById.php/?id=" + id,
                cashe: true
            }).success(callback);
        }
        return{
            answers: getData
        }
    }]);

app.factory('wrong', ['$http', function ($http, el) {
        function recordWrongAnswer(el) {
            $http({
                method: 'POST',
                url: "db/recordWrongAns.php",
//                headers: {
//                    'Content-Type': undefined
//                },
                data: el
            }).then(function () {
                console.dir("Success wrong answer: " + el)
            },
                    function () {
                        console.dir("reject wrong answer: " + el)
                    });
        }
        return{
            record: recordWrongAnswer
        }
    }]);
