'use strict';

/**
 * @ngdoc function
 * @name realeyesAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the realeyesAppApp
 */
angular.module('realeyesAppApp')
    .controller('MainCtrl', function($scope, mainService) {

        $scope.currencies = []
        $scope.firstCurrency = {}
        $scope.seccondCurrency = {}
        $scope.firstVal = 1;
        $scope.seccondVal = 1;
        $scope.val = 1;
        $scope.result = 0;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        mainService.getLatestCurrencies().then(function(data) {
            $scope.currencies = data;
            $scope.firstCurrency = $scope.currencies[0]
            $scope.seccondCurrency = $scope.currencies[1]
            console.log($scope.currencies)
        })

        $scope.calcCurrency = function(val, rate1, rate2) {
            return val / rate1 * rate2;
        };

        $scope.calcClick = function() {
            $scope.result = $scope.calcCurrency($scope.val, $scope.firstCurrency.rate, $scope.seccondCurrency.rate)

        };

        $scope.change = function() {
            var a = $scope.firstCurrency
            $scope.firstCurrency = $scope.seccondCurrency
            $scope.seccondCurrency = a
        };

    });