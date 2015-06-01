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





