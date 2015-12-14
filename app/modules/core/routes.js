define(["angularAMD"], function (angularAMD) {
    return [
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state(
                "home",
                angularAMD.route({

                    url: "/home",
                    // WE DON'T NEED TO WRITE CONTROLLER URL BECAUSE IT WILL BE AUTO LOADED USING
                    // $q PROMISE SERVICE 
                    controller: 'DefaultCtrl',
                    controllerUrl: "../app/modules/core/controllers/Controller_Default",
                    templateUrl: "../app/modules/core/views/home.html"
                    //resolve: {
                    //    loadController: ['$q', '$stateParams',
                    //        function ($q, $stateParams) {
                    //            var deferred = $q.defer();
                    //            require(['DefaultCtrl'], function () { deferred.resolve(); });
                    //            return deferred.promise;
                    //        }]
                    //},
                    //controllerProvider: function ($stateParams) {
                    //    return 'DefaultCtrl';
                    //},
                }));

            $urlRouterProvider
                .otherwise("home");
        }
    ];
});