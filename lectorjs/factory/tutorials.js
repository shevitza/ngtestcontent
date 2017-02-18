angular
        .module('lectorapp')
        .factory('tutorials', tutorials);
tutorials.$inject = ['$http'];
function tutorials($http) {
    var tutorials = {
        list: getData,
        find: find
    };
    return tutorials;


    function getData(callback) {
        $http({
            method: 'GET',
            url: 'db/all_tutorials.php',
            cashe: true
        }).success(callback);
    }

    function find(id, callback) {
        getData(function (data) {
            var tutor = data.filter(function (entry) {
                return entry.TutorialID === id;
            })[0];
            callback(tutor);
        });
    }
}
