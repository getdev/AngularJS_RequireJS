define(['themeModule'], function (themeModule) {

    themeModule.factory("testService", function () {



        var _doSomthing = function () {
            alert("ss")
            return "this is a test";
        }
        return {
            doSomthing: _doSomthing
        };
    })

});