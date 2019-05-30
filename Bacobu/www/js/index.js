var bacobuStore = angular.module('bacobuStore',[]);

/*
 * TODO: Remove test data and connect to database
 */
 bacobuStore.value('productList', [{"id":0,"name":"TestNecklace","price":25.00,"images":[{"mainImg":{"location":"images/testNecklace.jpg","description":"Blurry image of a necklace. Silver toned chain, green arc pendent wrapped in copper with green bead in center."}}]},{"id":1,"name":"TestNecklace","price":25.00,"images":[{"mainImg":{"location":"images/testNecklace.jpg","description":"Blurry image of a necklace. Silver toned chain, green arc pendent wrapped in copper with green bead in center."}}]},{"id":2,"name":"TestNecklace","price":25.00,"images":[{"mainImg":{"location":"images/testNecklace.jpg","description":"Blurry image of a necklace. Silver toned chain, green arc pendent wrapped in copper with green bead in center."}}]},{"id":3,"name":"TestNecklace","price":25.00,"images":[{"mainImg":{"location":"images/testNecklace.jpg","description":"Blurry image of a necklace. Silver toned chain, green arc pendent wrapped in copper with green bead in center."}}]},{"id":4,"name":"TestNecklace","price":25.00,"images":[{"mainImg":{"location":"images/testNecklace.jpg","description":"Blurry image of a necklace. Silver toned chain, green arc pendent wrapped in copper with green bead in center."}}]},{"id":5,"name":"TestNecklace","price":25.00,"images":[{"mainImg":{"location":"images/testNecklace.jpg","description":"Blurry image of a necklace. Silver toned chain, green arc pendent wrapped in copper with green bead in center."}}]},{"id":6,"name":"TestNecklace","price":25.00,"images":[{"mainImg":{"location":"images/testNecklace.jpg","description":"Blurry image of a necklace. Silver toned chain, green arc pendent wrapped in copper with green bead in center."}}]}]);

/*
 * TODO: Comment
 * TODO: Ensure errors in fetching products are handled gracefully
 */
bacobuStore.factory('populateProducts', ['productList', function(productList) {
	// console.log('productList from factory:');
	// console.log(productList);
    return productList;
}]);

/*
 * Used to handle display on the page which displays products.
 * This is currently the index (landing page).
 */
bacobuStore.controller('IndexCtrl', ['$scope', 'populateProducts', function($scope,populateProducts) {
	$scope.pageTitle = 'Welcome to Bacobu Jewelry!';
	$scope.pageDescription = 'Hello world!';
	$scope.productList = populateProducts;
	//TODO: Load language from elsewhere.
	$scope.productCardDefaultText = {
		'id': 'Product ID: ',
		'name': 'Product Name: '
	};
}]);
