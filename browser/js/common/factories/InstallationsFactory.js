app.factory('InstallationsFactory', function ($http) {
	var InstallationsFactory = {};

	InstallationsFactory.fetchAll = function(){	
		return $http.get('/api/installations/')
			.then(function(response){
				return response.data;
			})
	}
	return InstallationsFactory;
})