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
        'ngTouch',
        "googlechart",
        "chart.js"
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/history', {
                templateUrl: 'history.html',
                controller: 'historyCtrl',
                controllerAs: 'history'
            })
            .otherwise({
                redirectTo: '/'
            });
    });