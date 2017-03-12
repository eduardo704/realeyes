'use strict';

/**
 * @ngdoc function
 * @name realeyesAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the realeyesAppApp
 */
angular.module('realeyesAppApp')
    .controller('historyCtrl', function($scope, mainService) {
        $scope.currencies = []
        $scope.firstCurrency = {}
        $scope.dataSource = {
            chart: {
                caption: "Harry's SuperMart",
                subCaption: "Top 5 stores in last month by revenue",
                numberPrefix: "$",
                theme: "ocean"
            },

        };
        mainService.getLatestCurrencies().then(function(data) {
            $scope.currencies = data;
            $scope.firstCurrency = $scope.currencies[0]
        })
        mainService.getHistoryByIndex(0).then(function(data) {
            $scope.dataSource.data = data;
            console.log(data)
        })

        $scope.change = function() {
            var index = $scope.currencies.indexOf($scope.firstCurrency);
            mainService.getHistoryByIndex(index).then(function(data) {
                $scope.dataSource.data = data;
                console.log(data)
            })
        }
    });