var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/", {
                    templateUrl: "templates/allTutorialsController.html",
                    controller: "allTutorialsController"
                })
                .when("/tutorials/:id", {
                    templateUrl: "templates/tutorial.html",
                    controller: "tutorialDetailsController"
                })

    }]);

//
//function randomizeMap(myMap) {
//    var mapKeys = [];
//    for (var [key, value] of myMap.entries()) {
//        mapKeys.push(key);
//    }
//    mapKeys.sort(function () {
//        return .5 - Math.random();
//    });
//    arr = [];
//    for (var i = 0; i < mapKeys.length; i++) {
//        var v = myMap.get(mapKeys[i]);
//        var t = new Object();
//        t.key = mapKeys[i].toString();
//        t.val = v.toString();
//        arr.push(t);
//    }
// 
//    return arr;
//    //returns array of objects with properties key:.. and val:...        
//}