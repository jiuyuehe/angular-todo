var app = angular.module('app', ['service']);

var service = angular.module('service', []);

service.factory('service1', function ($log) {
    return {
        name: 'service1',
        getName: function () {
            $log.info('My name ' + this.name);
        }
    }
});

service.service('service2', function ($log) {
    return function (name) {
        this.name = name;
        this.getName = function () {
            $log.info('My name is ' + this.name);
        }
    }
});

app.controller('AppCtrl',function(service1,service2){
    service1.getName();

    var service_2=new service2('service2dd');
    service_2.getName();
});