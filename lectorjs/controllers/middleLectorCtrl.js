(function () {
    "use strict";
    angular.module('lectorapp')
            .controller('middleLectorCtrl', middleLectorCtrl);

    middleLectorCtrl.$inject = ["$scope", "middle", '$route'];


    function middleLectorCtrl($scope, middle, $route) {

        middle.list(function (m) {
            for (var i = 0; i < m.length; i++) {
                if (m[i].used != null) {
                    m[i].active = "active";
                } else {
                    m[i].active = 'notactive';
                    $scope.selected = {
                        id: m[i].MiddleID
                    }
                }
            }

            $scope.middle = m;
        });
//        $scope.reloadRoute = function () {
//             $route.reload();
//        }
        $scope.middleDelete = function () {
            middle.remove($scope.selected.id);
            $route.reload();
        }
        $scope.middleAdd=function(){
            middle.add($scope.middleContent);
            $scope.middleContent='';
            $route.reload();
        }

    }


})();



