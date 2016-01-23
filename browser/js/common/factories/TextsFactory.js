app.factory('TextsFactory', function ($http) {
	var TextsFactory = {};

	TextsFactory.fetchAll = function(){	
		return $http.get('/api/texts/')
			.then(function(response){
				return response.data;
			})
	}
	return TextsFactory;
})