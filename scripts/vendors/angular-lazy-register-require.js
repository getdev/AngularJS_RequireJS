/*!
 lazyRegister v0.0.1
 (c) 2015-2016 Yogesh Lonkar http://lonkar.org lonkar.yogeshr@gmail.com
 License: MIT
 */
define(function () {
    'use strict';

    function LazyRegister() {
    }

    LazyRegister.prototype.configureApp = function (app) {
        app.config(function ($controllerProvider, $compileProvider, $filterProvider, $animateProvider, $provide) {
                angular.extend(app, {
                    provider: function (name, constructor) {
                        $provide.provider(name, constructor);
                        return this;
                    },
                    controller: function (name, constructor) {
                        $controllerProvider.register(name, constructor);
                        return this;
                    },
                    directive: function (name, constructor) {
                        $compileProvider.directive(name, constructor);
                        return this;
                    },
                    filter: function (name, constructor) {
                        $filterProvider.register(name, constructor);
                        return this;
                    },
                    factory: function (name, constructor) {
                        $provide.factory(name, constructor);
                        return this;
                    },
                    service: function (name, constructor) {
                        $provide.service(name, constructor);
                        return this;
                    },
                    constant: function (name, constructor) {
                        $provide.constant(name, constructor);
                        return this;
                    },
                    value: function (name, constructor) {
                        $provide.value(name, constructor);
                        return this;
                    },
                    animation: angular.bind($animateProvider, $animateProvider.register)
                });
            }
        );
    };

    return new LazyRegister();
});
