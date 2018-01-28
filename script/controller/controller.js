angular.module("myApp")
	.controller("myCtrl", ['$scope', 'MyApis', 'Helper', function($scope, MyApis, Helper) {
	
	$scope.cData = {
		loading: true,
		products: [],
		partners: [],
		selectedProduct: null
	}

	$scope.buyProduct = function buyProduct(product) {
		//$location.path('/buyProduct').search({id: product.id});
		alert("TODO: Introduce Routing to buyProduct page");
		$scope.cData.selectedProduct = null;
	};

	
	$scope.displayProductDetails = function displayProductDetails(product) {
		$scope.cData.selectedProduct = product;
		if ($scope.cData.selectedProduct.imgPath.slice(0,4) != "img/") {
			$scope.cData.selectedProduct.imgPath = "img/" + product.imgPath;
		}
	};	

	$scope.getProducts = function getProducts() {		
		MyApis.getProducts().then(function(products) {
			$scope.cData.products = products;
	    }, function(errorMessage) {});
	};

	$scope.getPartners = function getPartners() {		
		MyApis.getPartners().then(function(partners) {
			$scope.cData.partners = partners;
	    }, function(errorMessage) {}).finally(function() {
			$scope.cData.loading = false;
		});
	};

	$scope.init = function init() {
		$scope.getProducts();
		$scope.getPartners();
	};

	$scope.init();

}]);
