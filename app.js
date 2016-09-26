(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LCController', LCController);

LCController.$inject = ['$scope'];

function LCController($scope) {

  $scope.msgout = "";

  $scope.ckif2much = function () {
    var arrayOfStrings = $scope.lmenu.split(',');
//    $scope.msgout = arrayOfStrings;
    return arrayOfStrings;
  };
}

})();
