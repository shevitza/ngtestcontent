app.controller('allTutorialsController', ['$scope', 'tutorials', function ($scope, tutorials) {
//        console.log('All Tutorials Controller');
        tutorials.list(function (tutorials) {
            $scope.tutorials = tutorials;
        });
    }]);
app.controller('tutorialDetailsController', ['$scope', '$routeParams', 'tutorials',
    function ($scope, $routeParams, tutorials) {
//        console.log('details');
        tutorials.find($routeParams.id, function (tutor) {
            $scope.tutor = tutor;
        });
    }]);
app.controller('test', ['$scope', '$routeParams', 'test', 'wrong',
    function ($scope, $routeParams, test, wrong) {
        var
                i,
                j,
                temp,
                correctAnswers = [],
                leftMap = new Map(),
                middleMap = new Map(),
                rightMap = new Map(),
                leftArr = [],
                rightArr = [],
                randomLeftMap = new Map(),
                randomRightMap = new Map(),
                wrongAnswers = [];
        test.answers($routeParams.id, function (testAnswers) {
            $scope.answers = testAnswers;
            for (i = 0; i < testAnswers.length; i++) {
                correctAnswers.push(testAnswers[i].leftContent + ' ' + testAnswers[i].middleContent + ' ' + testAnswers[i].rightContent);
                leftArr.push(testAnswers[i].LeftID);
                leftMap.set(testAnswers[i].LeftID, testAnswers[i].leftContent);
                middleMap.set(testAnswers[i].MiddleID, testAnswers[i].middleContent);
                rightArr.push(testAnswers[i].RightID);
                rightMap.set(testAnswers[i].RightID, testAnswers[i].rightContent);
                console.log(correctAnswers[i]);
            }


            //randomize keys from ID's
            leftArr = shuffle(leftArr);
            rightArr = shuffle(rightArr);
            for (i = 0; i < leftArr.length; i++) {
                j = leftArr[i];
                temp = leftMap.get(j);
                randomLeftMap.set(j, temp);
                if (i == 0) {
                    $scope.left = temp;
                }
            }

            for (i = 0; i < rightArr.length; i++) {
                j = rightArr[i];
                temp = rightMap.get(j)
                randomRightMap.set(j, temp);
                if (i == 0) {
                    $scope.right = temp;
                }
            }

            $scope.middle = testAnswers[0].middleContent;

            $scope.correctAnswers = correctAnswers;
            $scope.randomLeftMap = [];
            $scope.randomLeftMap = Array.from(randomLeftMap);
            $scope.randomRightMap = [];
            $scope.randomRightMap = Array.from(randomRightMap);
            $scope.middleMap = [];
            $scope.middleMap = Array.from(middleMap);
            $scope.guess = [];

            $scope.checkResult = function () {

                var i;
                wrongAnswers = [];
                var checked = $scope.left + ' ' + $scope.middle + ' ' + $scope.right;
                if (correctAnswers.length === 0) {
                    $scope.result = "Решихте всичко!";
                } else {
                    if (correctAnswers.indexOf(checked) === -1) {
                        $scope.result = "Брой неоткрити твърдения: " + correctAnswers.length;
//find id from wrong answer and send to the base
                        $scope.randomLeftMap.forEach(function (el) {
                            if (el[1] === $scope.left) {
                                wrongAnswers.push(Number(el[0]));
                                return;
                            }
                        });

                        $scope.middleMap.forEach(function (el) {
                            if (el[1] === $scope.middle) {
                                wrongAnswers.push(Number(el[0]));
                                return;
                            }
                        });

                        $scope.randomRightMap.forEach(function (el) {
                            if (el[1] === $scope.right) {
                                wrongAnswers.push(Number(el[0]));
                                return;
                            }
                        });
                        wrongAnswers.push(Number($routeParams.id));
                        $scope.data={
                            'l':wrongAnswers[0],
                            'm':wrongAnswers[1],
                            'r':wrongAnswers[2],
                            'id':wrongAnswers[3]
                        };
                        console.dir($scope.data);
                        wrong.record($scope.data);
                        
                        
                    } else {
                        i = correctAnswers.indexOf(checked);
                        correctAnswers.splice(i, 1);
                        $scope.guess.push(checked);
                        $scope.result = "Поздравления! Вярно!!";
                    }
                }


            }

        });
    }]);
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}