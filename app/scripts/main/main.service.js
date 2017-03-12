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
                        arr[index].rate = parseFloat(arr[index].rate).toFixed(2)
                    });
                    return data.data[0].Cube;
                });
        };

        service.getHistoryByIndex = function(index) {
            return $http.get('https://cryptic-sea-20456.herokuapp.com/cure')
                .then(function(data) {
                    var result = [];

                    data.data.forEach((element) => {
                        var obj = {}
                        obj.label = element.$.time;
                        obj.value = parseFloat(element.Cube[index].$.rate).toFixed(2);
                        result.push(obj)
                    });
                    return result.slice(0, 13);;
                });
        };
        return service;
    };

    angular.module('realeyesAppApp').factory('mainService', mainService);

}());