define(['themeModule'], function (themeModule) {

    themeModule.directive("customDirective", function () {
        return {
            template: 'Name: Mohamed<br /> Street: dubai'
        };
    })


});