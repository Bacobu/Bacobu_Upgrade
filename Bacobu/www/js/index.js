var bacobuStore = angular.module('bacobuStore',[]);

/*
 * Product-specific modules START
 */

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
 * Product-specific modules END
 */

/*
 * Cart-specific modules START
 */

bacobuStore.directive('cart', function() {
  return {
    templateUrl: 'templates/cart.html'
  };
});

/*
 * Cart-specific modules END
 */


/*
 * Main page modules START
 */

/*
 * Used to handle display on the page which displays products.
 * This is currently the index (landing page).
 */
bacobuStore.controller('IndexCtrl', ['$scope', 'populateProducts', function($scope,populateProducts) {
	$scope.pageTitle = 'Welcome to Bacobu Jewelry!';
	$scope.pageDescription = 'Current status: Product cards will auto-wrap with screen size adjustment. Products are generated from a JSON array pasted into Angular 1. Accessible alt text is present on images. Cart increments by one when an item is added.';
	$scope.productList = populateProducts;
	//TODO: Load language from elsewhere.
	$scope.productCardDefaultText = {
		'id': 'Product ID: ',
		'name': 'Product Name: ',
		'price': 'Price (USD): ',
		'addToCartBtn': 'Add to Cart'
	};
	//TODO: Move cart information into appropriate provider type
	//TODO: Function to increment num items in cart
	$scope.cart = {
		'numItems': 0
	};
	$scope.cart.updateCart = function() {
		$scope.cart.numItems++;
	};
}]);

/*
 * Main page modules END
 */
