app.config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: function($scope, soloExhibitions, installations, videos){

        	$scope.soloExhibitions = soloExhibitions;
        	$scope.installations = installations;
        	$scope.videos = videos;
        },
        resolve: {
        	soloExhibitions: function(ExhibitionsFactory){
        		return ExhibitionsFactory
        	},
        	installations: function(InstallationsFactory){
        		return InstallationsFactory
        	},
        	videos: function(VideosFactory){
        		return VideosFactory
        	}

        }

    });

});

