var app = angular.module('P1', ['ngResource']);

app.controller('Calculation', function ($scope, $resource, $timeout) {
    /**
     * init controller and set defaults
     */
    function init() {

        // set a default value
        $scope.n = 12;
        $scope.p = 3;
        $scope.q = 4;

        // empty result
        $scope.finalResult = [];

        $scope.getResult();
    }

    /**
     * requests and processes  data
     */
    function getResult() {
        $scope.finalResult = [];

        let a = []
        var i = 1
        for (i = 1; i <= $scope.n; i++) {

            if (i % $scope.p == 0 && i % $scope.q != 0 && i / $scope.p != 1) {
                a.push("Wat")
            } else if (i % $scope.p != 0 && i % $scope.q == 0 && i / $scope.q != 1) {
                a.push("Son")
            } else if (i % $scope.p == 0 && i % $scope.q == 0) {
                a.push("Watson")
            } else
                a.push(i)
        }

        $scope.finalResult = $scope.finalResult.concat(a);
    }
    $scope.getResult = function () {
        getResult();
    }
    init();
});