/**
 * Created by jiuyuehe on 2015/5/29.
 */

var app = angular.module('app', ['engines','cars']);

var engines = angular.module('engines', []);

engines.factory('dieselEngine', function () {
    return {
        type: 'diesel'
    }
});


var cars = angular.module('cars',[]);
cars.factory('car', function ($log, dieselEngine) {
    return {
        start: function () {
            $log.info('Starting --- ' + dieselEngine.type + "   car");
        }
    }
});

cars.factory('dieselEngine', function () {
    return {
        type:'custom , instead of '
    }
});



app.controller('AppCtrl', function ($scope, car) {

    $scope.name = "hello world";

    car.start();

});




