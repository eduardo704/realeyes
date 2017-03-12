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
        $scope.enable = true;
        $scope.firstCurrency = {}
        $scope.dataSource = {
            chart: {
                caption: "Currency History",
                numberPrefix: "$",
                theme: "ocean"
            },

        };

        google.charts.load('current', { packages: ['corechart', 'line'] });
        google.charts.setOnLoadCallback(enableFunc);

        function enableFunc() {
            $scope.enable = false;
        }

        function drawBasic(aaa) {
            var data = google.visualization.arrayToDataTable(aaa);
            var options = {
                title: 'Company Performance',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            // var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            // chart.draw(data, options);

            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

            chart.draw(data, options);
        }
        mainService.getLatestCurrencies().then(function(data) {
            $scope.currencies = data;
            $scope.firstCurrency = $scope.currencies[0]
        })
        mainService.getHistoryByIndex(0).then(function(data) {
            drawBasic(data)
        })

        $scope.change = function() {
            var index = $scope.currencies.indexOf($scope.firstCurrency);
            mainService.getHistoryByIndex(index).then(function(data) {
                // $scope.dataSource.data = data;
                drawBasic(data)
            })
        }
    });