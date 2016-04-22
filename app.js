// app declaration
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// routes
myApp.config(function ($routeProvider) {
  $routeProvider.when('/page1', {
    templateUrl: 'pages/page1.html',
    controller: 'page1Controller'
  })
  .when('/page2', {
    templateUrl: 'pages/page2.html',
    controller: 'page2Controller'
  });
});
