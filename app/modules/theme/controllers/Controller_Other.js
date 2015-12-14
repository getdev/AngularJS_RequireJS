

"use strict";
define(['themeModule', 'testService', 'customDirective'], function (themeModule, testService) {
    themeModule.controller('Controller_Other', ['$scope', 'testService', function ($scope, testService) {
        $scope.title = testService.doSomthing();
    }]);
})
