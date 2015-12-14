define(['angularAMD'], function (angularAMD) {
    return [
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("theme", angularAMD.route({
                    url: "/theme",
                    controllerUrl: "../app/modules/theme/controllers/Controller_Other",
                    templateUrl: "../app/modules/theme/views/other.html",
                    controller: 'Controller_Other'
                }));

        }
    ];
});