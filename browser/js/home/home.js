app.config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: function($scope, soloExhibitions, installations, videos, texts){

        	$scope.soloExhibitions = soloExhibitions;
            console.log(soloExhibitions)
        	$scope.installations = installations;
        	$scope.videos = videos;
        	$scope.texts = texts;

        },
        resolve: {
        	soloExhibitions: function(ExhibitionsFactory){
        		return ExhibitionsFactory.fetchSolo()
        	},
        	installations: function(InstallationsFactory){
        		return InstallationsFactory.fetchAll()
        	},
        	videos: function(VideosFactory){
        		return VideosFactory.fetchAll()
        	},
        	texts: function(TextsFactory){
        		return TextsFactory.fetchAll()
        	}

        }

    });

});

