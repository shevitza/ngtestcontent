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

