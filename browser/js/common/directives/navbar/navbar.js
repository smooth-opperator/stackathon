app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state, ExhibitionsFactory) {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/navbar/navbar.html'
        // link: function (scope) {
        //     console.log("in link function", scope)
            // scope.items = [
            //     { label: 'Home', state: 'home' },
            //     { label: 'About', state: 'about' },
            //     { label: 'Documentation', state: 'docs' },
            //     { label: 'Members Only', state: 'membersOnly', auth: true }
            // ];
            // scope.soloExhibitions = ExhibitionsFactory.solo();
            // scope.groupExhibitions = ExhibitionsFactory.group();

            // scope.user = null;

            // scope.isLoggedIn = function () {
            //     return AuthService.isAuthenticated();
            // };

            // scope.logout = function () {
            //     AuthService.logout().then(function () {
            //        $state.go('home');
            //     });
            // };

            // var setUser = function () {
            //     AuthService.getLoggedInUser().then(function (user) {
            //         scope.user = user;
            //     });
            // };

            // var removeUser = function () {
            //     scope.user = null;
            // };

            // setUser();

            // $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            // $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            // $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

            // $rootScope.$on('communication', function(event, data){ 
            //     scope.soloExhibitions = data[0];
            //     scope.groupExhibitions = data[1];
            //     console.log("received an event from controller", "data: ", data)})

        // }

    };

});
