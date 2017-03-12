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