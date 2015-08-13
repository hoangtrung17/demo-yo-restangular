'use strict';

/**
 * @ngdoc function
 * @name demoYoRestangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoYoRestangularApp
 */
angular.module('demoYoRestangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
