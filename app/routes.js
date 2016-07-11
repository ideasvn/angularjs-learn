angular.module('ideasVN.router').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            views: {
                '@': {
                    controller: 'HomeCtrl',
                    templateUrl: "/views/home/home.html"
                }
            }
        });
    $locationProvider.html5Mode(true);
}]);