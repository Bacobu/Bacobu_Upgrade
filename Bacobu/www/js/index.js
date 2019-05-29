var bacobuStore = angular.module('bacobuStore',[]);

/*
 * Used to handle display on the page which displays products.
 * This is currently the index (landing page).
 */
bacobuStore.controller('IndexCtrl', ['$scope', function($scope) {
	$scope.pageTitle = 'Welcome to Bacobu Jewelry!';
	$scope.pageDescription = 'Hello world!';
}]);
