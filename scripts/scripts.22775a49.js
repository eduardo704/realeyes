'use strict';

/**
 * @ngdoc overview
 * @name realeyesAppApp
 * @description
 * # realeyesAppApp
 *
 * Main module of the application.
 */
angular
    .module('realeyesAppApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
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
        // $scope.change = function() {
        //     $scope.firstVal = $scope.calcCurrency($scope.firstCurrency.rate, $scope.seccondCurrency.rate)
        //     $scope.seccondVal = 1;
        // };
        // $scope.changeSec = function() {
        //     $scope.seccondVal = $scope.calcCurrency($scope.seccondCurrency.rate, $scope.firstCurrency.rate)
        //     $scope.firstVal = 1;
        // };
        $scope.calcClick = function() {
            var a = $scope.calcCurrency($scope.val, $scope.firstCurrency.rate, $scope.seccondCurrency.rate)
            $scope.result = a.toFixed(2);
        };

        $scope.change = function() {
            var a = $scope.firstCurrency
            $scope.firstCurrency = $scope.seccondCurrency
            $scope.seccondCurrency = a
        };

    });
'use strict';

(function() {
    var mainService = function($http) {
        var service = {};

        var size = 4;

        var arrays = []
            //Gets the list of slides parse created at to date
        service.getLatestCurrencies = function() {
            return $http.get('https://cryptic-sea-20456.herokuapp.com/cure')
                .then(function(data) {
                    data.data[0].Cube.forEach((element, index, arr) => {
                        arr[index] = element.$;
                        arr[index].rate = parseFloat(arr[index].rate)
                    });
                    return data.data[0].Cube;
                });
        };
        return service;
    };

    angular.module('realeyesAppApp').factory('mainService', mainService);

}());