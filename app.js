(function() {
    var app = angular.module('Flatlanders', []);

    app.controller('StoreController', function($scope){
        $scope.amountPurchased = 0;

        $scope.gems = [
            {item: "Ruby", quantity: 15, price: 3499.98, numberPurchased: 0, index: 0},
            {item: "Diamond", quantity: 10, price: 8753.98, numberPurchased: 0, index: 1},
            {item: "Emerald", quantity: 87, price: 2343.98, numberPurchased: 0, index: 2},
            {item: "Crystal", quantity: 34, price: 123.98, numberPurchased: 0, index: 3},
            {item: "Gold", quantity: 105, price: 6735.98, numberPurchased: 0, index: 4}
        ]
        
        $scope.buy = function(index) {
            $scope.gems[index].numberPurchased++;
            $scope.gems[index].quantity--;    
            $scope.amountPurchased += $scope.gems[index].price;
        }

        $scope.sell = function(index) {
            $scope.gems[index].numberPurchased--;
            $scope.gems[index].quantity++;
            $scope.amountPurchased -= $scope.gems[index].price;
        }

        $scope.getOnlyPurchased = function(gem) {
            // Do some tests
            if(gem.numberPurchased > 0) {
                return true; // this will be listed in the results
            }

            return false; // otherwise it won't be within the results
        };
    });

})();