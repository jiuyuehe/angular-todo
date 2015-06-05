/**
 * Created by jiuyuehe on 2015/5/29.
 */

angular.module('txtInput', []).controller(
    'TxtInputCtrl', function ($scope) {
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
);

