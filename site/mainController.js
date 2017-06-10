var app = angular.module('hashan', []);

app.controller('mainCtrl', function($scope, $http, $window) {
    $scope.coupons = [
        { description: "טיסות רומנטיות בכדור פורח מעל פארק לכיש" },
        { description: "טיפול שבועי אצל שננית" },
        { description: "ארוחת גורמה אצל שמוליק אבולפיה" },
        { description: "ארוחת שקשוקה ישראלית" },

        { description: "טיסות רומנטיות בכדור פורח מעל פארק לכיש" },
        { description: "טיפול שבועי אצל שננית" },
        { description: "ארוחת גורמה אצל שמוליק אבולפיה" },
        { description: "ארוחת שקשוקה ישראלית" },

        { description: "טיסות רומנטיות בכדור פורח מעל פארק לכיש" },
        { description: "טיפול שבועי אצל שננית" },
        { description: "ארוחת גורמה אצל שמוליק אבולפיה" },
        { description: "ארוחת שקשוקה ישראלית" },

    ];


    $scope.subMenu = [{
            text: "היאבקות"
        },
        {
            text: "יוגה"
        },
        {
            text: "ריקודים"
        },
        {
            text: "ג'ודט"
        },
    ];


    $scope.menu = [{
            label: "ספורט",
            count: 12
        },
        {
            label: "בידור",
            count: 24,
        },
        {
            label: "חיות ישראליות מקומיות",
            count: 4
        },
        {
            label: "אטרקציות",
            count: 24
        },
        {
            label: "בריאות ויופי",
            count: 24
        },
        {
            label: "בתי קפה",
            count: 4
        },
    ]


    $scope.sideMenuActive = false;
    $scope.overMenu = false;

    $scope.closeMenu = function(cat) {
        $scope.overMenu = false;
        $scope.path[1] = cat.text;
    }


    $scope.openMenu = function(cat) {
        ($scope.currentMenu || {}).isActive = false;
        $scope.currentMenu = cat;
        cat.isActive = true;
        $scope.sideMenuActive = true;
        $scope.$apply();
    }

    $scope.openCoupon = function(coupon) {
        $window.open('info.html?coupon=' + coupon.description);
    }


    $scope.path = ["שפות", "אנגלית"];

});