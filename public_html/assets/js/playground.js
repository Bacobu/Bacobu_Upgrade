
/*function toggleDisplay(elemToToggleId) {
	var elemToToggle = document.getElementById(elemToToggleId); //update me to JS or add Angular
	if(elemToToggle.style.display == "none") {
		elemToToggle.style.display = "block";
	} else if(elemToToggle.style.display == "block") {
		elemToToggle.style.display = "none";
	}
}*/

var playgroundApp = angular.module("testApp", ['ngRoute']);

playgroundApp.config(function ($routeProvider) {
	$routeProvider
	 .when('/playground', {
		 templateUrl: '/../playground.html',
		 controller: 'PlaygroundCtrl'
	 })
//	 .when('/playground/:subset', {
//		 templateUrl: 'filepath.htm',
//		 controller: 'ControllerName'
//	 })
//	 .when('/other/:subset/specific/:subset2', {
//		 templateUrl: 'filepath.htm',
//		 controller: 'ControllerName'
//	 })
	 .otherwise({
		 redirectTo: '/index'
	 });
});

playgroundApp.controller("playgroundCtrl", function($scope) {
    $scope.firstName = "Vy";
	$scope.simpleArray = [5, 6, 9, 11];
	$scope.badToggleDisplay = function(elemToToggleId) {
		var elemToToggle = document.getElementById(elemToToggleId); //update me to JS or add Angular
		if(elemToToggle.style.display == "none") {
			elemToToggle.style.display = "block";
		} else if(elemToToggle.style.display == "block") {
			elemToToggle.style.display = "none";
		}
	}
});

