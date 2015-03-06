angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $localStorage, $stateParams) {

	$scope.$storage = $localStorage;
	$http.get('http://www.noasa.com.ar/api/get_posts').success(function(data){
		$localStorage.posts = $scope.posts = data.posts;
		console.log(data.posts);
	});
})

.controller('DashidCtrl', function($scope, $http, $localStorage, $stateParams){
	$scope.$storage = $localStorage;
	$http.get('http://www.noasa.com.ar/api/get_post/?slug='+$stateParams.slug).success(function(data){
		$scope.dash = data;
		console.log(data);
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
