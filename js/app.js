'use strict';

angular.module('MockupsApp.directives', []);

var MockupsApp = angular.module('MockupsApp', [
  'ngRoute',
  'ngTouch',
  'ui.router',
  'ui.bootstrap',
  'MockupsApp.directives'
]);

MockupsApp.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
      .state('/', {url: "/",templateUrl: ""})
    ;     
});

MockupsApp.controller('MockupsAppController', function ($scope, $modal, $log) {

  $scope.a = {
  "Statuses":
  [
    {"ID":"1", "Name":"SignedOut"},
    {"ID":"2", "Name":"SignedIn"}
  ],
  "StatusID":"1"
  };
  $scope.StatusID=1;

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

  var modalInstance = $modal.open({
    animation: $scope.animationsEnabled,
    templateUrl: 'myModalContent.html',
    controller: 'ModalInstanceCtrl',
    size: size,
    resolve: {
      items: function () {
      return $scope.items;
      }
    }
  });

  modalInstance.result.then(function (selectedItem) {
    $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


});