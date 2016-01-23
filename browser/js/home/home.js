app.config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: function($scope, soloExhibitions, groupExhibitions, paintings, worksonpaper, installations, videos, texts){

        	$scope.soloExhibitions = soloExhibitions;
        	$scope.groupExhibitions = groupExhibitions;

        	$scope.largePaintings = paintings.filter(function(painting){
        		return painting.scale === 'Large'
        	});
        	$scope.smallPaintings = paintings.filter(function(painting){
        		return painting.scale === 'Small'
        	});
        	
        	var largePaintingsyears = $scope.largePaintings.map(function(painting){
        		return painting.year;
        	});
        	$scope.largePaintings.years = _.uniq(largePaintingsyears);
        	console.log($scope.largePaintings.years, "years of large paintings")
        	     	      
        	var smallPaintingsyears = $scope.smallPaintings.map(function(painting){
        		return painting.year;
        	});
        	$scope.smallPaintings.years = _.uniq(smallPaintingsyears);
        	
        	$scope.silkscreen = worksonpaper.filter(function(work){
        		return work.category === 'Silkscreen'
        	});

        	$scope.etchings = worksonpaper.filter(function(work){
        		return work.category === 'Etching'
        	});
        	$scope.paintings = worksonpaper.filter(function(work){
        		return work.category === 'Painting'
        	});
        	$scope.installations = installations;
        	$scope.videos = videos;
        	$scope.texts = texts;


        	
        },
        resolve: {
        	soloExhibitions: function(ExhibitionsFactory){
        		return ExhibitionsFactory.fetchSolo()
        	},
        	groupExhibitions: function(ExhibitionsFactory){
        		return ExhibitionsFactory.fetchGroup()
        	},
        	paintings: function(PaintingsFactory){
        		return PaintingsFactory.fetchAll()
        	},
        	worksonpaper: function(PaperFactory){
        		return PaperFactory.fetchAll()
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

// $rootScope.$broadcast('communication', [$scope.soloExhibitions, $scope.groupExhibitions])