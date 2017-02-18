(function () {
    "use strict";
    angular.module(['lectorapp'])
            .directive('isUnique', isUnique);
    isUnique.$inject = ['signinFactory'];
    function isUnique() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {

                element.bind('blur', function (e) {
                if (!ngModel || !element.val())
                    return;
                var keyProperty = scope.$eval(attrs.wcUnique);
                var currentValue = element.val();
                console.log(keyProperty);
                console.log(currentValue);
//                signinFactory.alkeyPropertyeadyhas(keyProperty.key, keyProperty.property, currentValue)
//                        .then(function (unique) {
//                            //Ensure value that being checked hasn't changed
//                            //since the Ajax call was made
//                            if (currentValue == element.val()) {
//                                ngModel.$setValidity('unique', unique);
//                            }
//                        }, function () {
//                            //Probably want a more robust way to handle an error
//                            //For this demo we'll set unique to true though
//                            ngModel.$setValidity('unique', true);
//                        });
                });
            }
        }
    }
})();
