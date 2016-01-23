app.factory('PaperFactory', function ($http) {
	var PaperFactory = {};

	PaperFactory.fetchAll = function(){	
		return $http.get('/api/worksonpaper/')
			.then(function(response){
				return response.data;
			})
	}
	return PaperFactory;
})