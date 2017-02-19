(function () {
    "use strict";
    angular
            .module('lectorapp', ['ngRoute', 'ngCookies']);
    angular
            .module('lectorapp')
            .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider
                            .when("/", {
                                templateUrl: "templates/allTutorialsLector.html",
                                controller: "allTutorialsLectorCtrl"
                            })
                            .when("/edit/:id", {
                                templateUrl: "templates/lectorEdit.html",
                                controller: "editLectorCtrl",
                                resolve: {
                                    "check": function (loginFactory, $location) {
                                        if (loginFactory.checkPermission()) {

                                        } else {
                                            alert("You don't have access here! Login, please!");
                                            $location.path('/login');
                                        }
                                    }
                                }
                            })
                            .when("/middle", {
                                templateUrl: "templates/middle.html",
                                controller: "middleLectorCtrl",
                                resolve: {
                                    "check": function (loginFactory, $location) {
                                        if (loginFactory.checkPermission()) {

                                        } else {
                                            alert("You don't have access here! Login, please!");
                                            $location.path('/login');
                                        }
                                    }
                                }
                            })
                            .when("/signin", {
                                templateUrl: "templates/signin.html",
                                controller: "signinCtrl"
                            })
                            .when("/new", {
                                templateUrl: "templates/newTutorialLector.html",
                                controller: "newTutorLectorCtrl",
                                resolve: {
                                    "check": function (loginFactory, $location) {
                                        if (loginFactory.checkPermission()) {

                                        } else {
                                            alert("You don't have access here! Login, please!");
                                            $location.path('/login');
                                        }
                                    }
                                }
                            })
                            .when("/logout", {
                                templateUrl: "templates/login.html",
                                controller: "logoutCtrl"
                            })
                            .when("/login", {
                                templateUrl: "templates/login.html",
                                controller: "loginCtrl"
                            })
                            .otherwise("/signin", {
                                templateUrl: "templates/allTutorialsLector.html",
                                controller: "allTutorialsLectorCtrl"
                            })

                }]);



})();





