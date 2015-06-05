/**
 * Created by jiuyuehe on 2015/5/28.
 */

var HelloCtrl = function ($scope) {
    $scope.name = 'world';

}


var WorldCtrl = function ($scope) {
    $scope.population = 7000;
    $scope.countries = [
        {name: 'France', population: 63.1} ,
        {name: 'United Kingdom', population: 61.8}
    ];
    $scope.worldsPercentage = function (countryPopulation) {
        return (countryPopulation / $scope.population) * 100;
    }

}


var TxtInputCtrl = function ($scope) {
    var Max_Len = 10;

    $scope.message = "";

    $scope.remaining = function () {
        return Max_Len - $scope.message.length;
    };
    $scope.hasValidLength = function () {

        console.log($scope.remaining());

        if ($scope.remaining() < 0 || $scope.remaining() === 10) {
            return false;
        }
        return true;
    };

    $scope.clear = function () {
        $scope.message = "";
    }

    $scope.shouldWarn = function () {
         return $scope.remaining() < 5;
    }
}
