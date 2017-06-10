var app = angular.module('hashan', []);

app.controller('infoCtrl', function($scope, $http, $window, $location) {

    $scope.coupon = decodeURIComponent($location.$$absUrl).split("?coupon=")[1];

    $scope.priceOptions = ["אפשרות 1", "אפשרות 2", "אפשרות 3"];

    $scope.print = function() {
         //var frm = document.getElementById("printf").contentWindow;
         var newWin =  document.getElementById("printf").contentWindow;
//newWin.document.write('<body onload=window.print()>This is a new page I inserted</body>');
//newWin.document.close();

            newWin.focus();
            newWin.print();
            return false;
    }
});