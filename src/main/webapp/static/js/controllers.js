var phonecatApp = angular.module('jarStormApp', ['ui.bootstrap']);



phonecatApp.controller('RepoListCtrl', function ($scope) {
  $scope.repos = [
    {'name': 'spray-servlet-webapp',
     'snippet': 'An example web-application built around Spray and spray-servlet. With full spray-json integration too.'},
    {'name': 'diablo-api-py',
     'snippet': 'Diablo III Web Api Python Client.'}
  ];
});
