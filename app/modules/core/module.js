define(["angularAMD", "themeModule", "coreRouteConfig", "angular-lazy-register"], function (angularAMD, themeModule, coreRouteConfig, lazyRegister) {
    var coreModule = angular.module('coreModule', ["themeModule", "ui.router"]);
    coreModule.config(coreRouteConfig);



    angularAMD.bootstrap(coreModule);


    lazyRegister.configureApp(coreModule);
    return coreModule;


})