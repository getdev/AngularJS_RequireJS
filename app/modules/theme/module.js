define(["angularAMD", "ui-router", "themeRouteConfig", "angular-lazy-register"], function (angularAMD, uiRouter, themeRouteConfig, lazyRegister) {

    var themeModule = angular.module("themeModule", ["ui.router"]);

    themeModule.config(themeRouteConfig);

    lazyRegister.configureApp(themeModule);

    return themeModule;
})