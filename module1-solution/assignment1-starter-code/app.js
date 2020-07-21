(function () {
    "use strict";

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.message = "";
        
        $scope.checkLunch = function () {
            let lunchItems = $scope.lunch.split(',').filter(function (item) {
                if (item.trim()) {
                    return item;
                }
            });

            if (lunchItems.length === 0) {
                $scope.message = 'Please enter data first';
            } else if (lunchItems.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        }
    }

})();