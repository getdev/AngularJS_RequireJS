require.config({
    baseUrl: "",
    paths: {
        "angular": "scripts/vendors/angular",
        "ui-router": "scripts/vendors/angular-ui-router",
        "angularAMD": "scripts/vendors/angularAMD",

        "DefaultCtrl": "../app/modules/core/controllers/Controller_Default",
        "Controller_Other": "../app/modules/theme/controllers/Controller_Other",
        'angular-lazy-register': 'scripts/vendors/angular-lazy-register-require',
        "coreModule": "../app/modules/core/module",
        "themeModule": "../app/modules/theme/module",
        "testService": "../app/modules/theme/services/test",
        "coreRouteConfig": "../app/modules/core/routes",
        "themeRouteConfig": "../app/modules/theme/routes",
        'ngload': "scripts/vendors/ngload",
        "customDirective": "../app/directives/customDirective"
    },
    shim: {
        "angularAMD": ["angular"],
        "ui-router": ["angular"],
        'angular-lazy-register': ['angular'],
    },
    deps: ["coreModule"]
});


