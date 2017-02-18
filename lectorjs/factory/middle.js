(function(){
    'use strict';
 angular
        .module('lectorapp')
        .factory('middle', middle);
middle.$inject = ['$http'];

function middle($http) {
    var m = {
        list: getData,
        find: find,
        remove: removeMiddle,
        add: middleAdd
    };
    return m;


    function getData(callback) {
        $http({
            method: 'GET',
            url: 'db/all_middle.php'
        }).success(callback);
    }

    function removeMiddle(id) {
        $http({
            method: 'GET',
            url: 'db/delete_middle.php/?id=' + id
        }).then(function (status) {
            return status.data;
        });
    }

function middleAdd(text, callback){
    $http({
        method: 'POST',
        url:'db/add_middle.php',
        data: text
    }).then(function (status) {
            return status.data;
        });
    
}

    function find(id, callback) {
        getData(function (data) {
            var midd = data.filter(function (entry) {
                return entry.MiddleID === id;
            })[0];
            callback(midd);
        });
    }
}   
    
})();

