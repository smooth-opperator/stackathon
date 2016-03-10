'use strict';
window.app = angular.module('FullstackGeneratedApp', ['ui.router', 'ngAnimate']);

app.config(function ($urlRouterProvider, $locationProvider, $sceDelegateProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.vimeo.com/**',
        'https://vimeo.com/**',
        'http://player.vimeo.com/**'

        ])

});




