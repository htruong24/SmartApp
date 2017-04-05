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

