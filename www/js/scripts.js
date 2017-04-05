// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('smartApp', ['ionic', 'smartApp.controllers', 'smartApp.services'])

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
   // Disable BACK button on home
  $ionicPlatform.registerBackButtonAction(function(event) {
      alert("Back");
  }, 100);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
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
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
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
  $urlRouterProvider.otherwise('/app/login');
});

angular.module('app', [])
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


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('smartApp', ['ionic', 'smartApp.controllers', 'smartApp.services'])

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
   // Disable BACK button on home
  $ionicPlatform.registerBackButtonAction(function(event) {
      alert("Back");
  }, 100);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
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
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
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
  $urlRouterProvider.otherwise('/app/login');
});

angular.module('app', [])
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


angular.module('smartApp.services', [])

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
})
.factory('Projects', function() {
  return {
    all: function() {
      var projectString = window.localStorage['projects'];
      if(projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        tasks: []
      };
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
});
'use strict';

angular.module('app')
  .controller('LoginCtrl', ['$scope', '$state',
    function ($scope, $state) {
      $ionicLoading.hide();
      $scope.isClick = false;
      $scope.isShowLogin = false;

      $ionicPlatform.ready(function () {
        $scope.login();
      });

      $scope.login = function () {
        var user = localStorage.user && JSON.parse(localStorage.user);
        if (user) {
          $state.go('home');
        } else {
          if (!$scope.isClick) {
            $scope.isClick = true;
            // get authentication azure
            azureAuth.azureAuthenticate(AZURE_INFO).then(function (res) {
              // store authentication local
              api.auth = res;
              localStorage.user = JSON.stringify(res);

              // create DB
              dbLocal.db = window.sqlitePlugin.openDatabase({
                name: res.userInfo.userId + '.db',
                location: 'default'
              });
              dbLocal.init().then(function () {
                $ionicHistory.clearCache().then(function () {
                  $scope.isClick = false;
                  $state.go('home');
                });
              });

            }, function () {
              // login false

              var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: '<strong>Whoops! Something went wrong!</strong><br><ul><li>No internet or login credentials are incorrect.</li><li>Please try again.</li></ul>'
              });
              alertPopup.then(function () {
                $scope.isClick = false;
                $scope.isShowLogin = true;
              });
            });
          }
        }
      };
    }
  ]);



'use strict';

angular.module('app')
  .controller('LoginCtrl', ['$scope', '$state',
    function ($scope, $state) {
      $ionicLoading.hide();
      $scope.isClick = false;
      $scope.isShowLogin = false;

      $ionicPlatform.ready(function () {
        $scope.login();
      });

      $scope.login = function () {
        var user = localStorage.user && JSON.parse(localStorage.user);
        if (user) {
          $state.go('home');
        } else {
          if (!$scope.isClick) {
            $scope.isClick = true;
            // get authentication azure
            azureAuth.azureAuthenticate(AZURE_INFO).then(function (res) {
              // store authentication local
              api.auth = res;
              localStorage.user = JSON.stringify(res);

              // create DB
              dbLocal.db = window.sqlitePlugin.openDatabase({
                name: res.userInfo.userId + '.db',
                location: 'default'
              });
              dbLocal.init().then(function () {
                $ionicHistory.clearCache().then(function () {
                  $scope.isClick = false;
                  $state.go('home');
                });
              });

            }, function () {
              // login false

              var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: '<strong>Whoops! Something went wrong!</strong><br><ul><li>No internet or login credentials are incorrect.</li><li>Please try again.</li></ul>'
              });
              alertPopup.then(function () {
                $scope.isClick = false;
                $scope.isShowLogin = true;
              });
            });
          }
        }
      };
    }
  ]);

