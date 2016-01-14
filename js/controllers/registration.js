myApp.controller('RegistrationController', 
	['$scope','Authentication', 
	function($scope,Authentication) {
  	//LOGIN FUNCTION
  	$scope.login = function(){
  		Authentication.login($scope.user);
 	};
 	  //REGISSTER FUNCTION
  	$scope.register = function(){
  	  Authentication.register($scope.user);
  	};//register

  	$scope.logout = function(){
  		Authentication.logout();
  	};// logout
}]);//controller