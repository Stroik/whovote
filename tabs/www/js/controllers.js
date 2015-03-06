angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $localStorage, $stateParams, $ionicLoading) {
	$scope.$storage = $localStorage;
	$ionicLoading.show({
      template: 'Cargando...'
    });
	$http.get('http://www.noasa.com.ar/api/get_posts/?post_type=product').success(function(data){
		if(!data){
			$ionicLoading.show({
		      template: 'Sin conexión',
		      content: 'loading'
		    });	
		}
		else{
		$ionicLoading.hide();
		$localStorage.posts = $scope.posts = data.posts;
		console.log(data.posts);
		}
	}).error(function(err){
		$ionicLoading.show({
		      template: 'Sin conexión',
		      content: 'loading'
		});
	});

	
})

.controller('DashidCtrl', function($scope, $http, $localStorage, $stateParams, $ionicLoading){
	$scope.$storage = $localStorage;
	$ionicLoading.show({
      template: 'Cargando...',
      content: 'loading'
    });

	$http.get('http://www.noasa.com.ar/api/get_post/?post_type=product&slug='+ $stateParams.postSlug).success(function(data){
		$ionicLoading.hide();
		$localStorage.post = $scope.post = data.post;
		console.log(data.post);
	}).error(function(err){
		$ionicLoading.show({
	      template: 'Sin conexión',
	      content: 'loading'
	    });
	});
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
