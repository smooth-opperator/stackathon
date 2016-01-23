app.factory('VideosFactory', function ($http) {
	var VideosFactory = {};

	VideosFactory.fetchAll = function(){	
		return $http.get('/api/videos/')
			.then(function(response){
				return response.data;
			})
	}
	return VideosFactory;
})