app.factory('PaintingsFactory', function ($http) {
	var PaintingsFactory = {};

	PaintingsFactory.fetchAll = function(){
		
		return $http.get('/api/paintings/')
			.then(function(response){
				console.log(response.data, "data from paintings factory")
				return response.data;
			})
	}

	return PaintingsFactory;
})