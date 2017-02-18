(function () {
    "use strict";
    angular.module(['lectorapp'])
            .directive('equal', function () {
                return {
                    require: 'ngModel',
                    scope: {
                        equal: '='
                    },
                    link: function (scope, elem, attrs, ctrl) {

                        ctrl.$validators.equal = function (modelValue, viewValue) {
                            return modelValue === scope.equal;
                        };

                        scope.$watch('equal', function (newVal, oldVal) {
                            ctrl.$validate();
                        });
                    }
                };
            });
})();
