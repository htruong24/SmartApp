
angular.module('app', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
	controller: 'LoginCtrl'
  })
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
 .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.todos', {
    url: '/todos',
    views: {
      'menuContent': {
        templateUrl: 'templates/todos.html',
        controller: 'TodosCtrl'
      }
    }
  })
  .state('app.projects', {
    url: '/projects',
    views: {
      'menuContent': {
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

angular.module('app')
.service("LoginService", function($q)
{
   return {
        login: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});

'use strict';

angular.module('app')
  .controller('HomeCtrl', ['$scope', '$state', function ($scope, $state) {
      alert("checking"); 
  }
]);

 
'use strict';

angular.module('app')
  .controller('LoginCtrl', ['$scope', '$state',
    function ($scope, $state) {

      $scope.login = function () {
        var user = localStorage.user && JSON.parse(localStorage.user);
        if (user) {
          $state.go('app.home');
        } else {
          // if (!$scope.isClick) {
          //   $scope.isClick = true;
          //   // get authentication azure
          //   azureAuth.azureAuthenticate(AZURE_INFO).then(function (res) {
          //     // store authentication local
          //     api.auth = res;
          //     localStorage.user = JSON.stringify(res);

          //     // create DB
          //     dbLocal.db = window.sqlitePlugin.openDatabase({
          //       name: res.userInfo.userId + '.db',
          //       location: 'default'
          //     });
          //     dbLocal.init().then(function () {
          //       $ionicHistory.clearCache().then(function () {
          //         $scope.isClick = false;
          //         $state.go('home');
          //       });
          //     });

          //   }, function () {
          //     // login false

          //     var alertPopup = $ionicPopup.alert({
          //       title: 'Error',
          //       template: '<strong>Whoops! Something went wrong!</strong><br><ul><li>No internet or login credentials are incorrect.</li><li>Please try again.</li></ul>'
          //     });
          //     alertPopup.then(function () {
          //       $scope.isClick = false;
          //       $scope.isShowLogin = true;
          //     });
          //   });
          // }
           $state.go('app.home');
        }
      };
    }
  ]);


'use strict';

angular.module('app')
  .controller('MenuCtrl', ['$scope', '$state', function ($scope, $state) {
     
  }
]);

