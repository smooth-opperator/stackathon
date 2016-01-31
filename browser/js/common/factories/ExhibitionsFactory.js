app.factory('ExhibitionsFactory', function ($http) {
	var ExhibitionsFactory = {};

	ExhibitionsFactory.fetchSolo = function(){

		return $http.get('/api/exhibitions/')
			.then(function(response){
				return response.data;
			})
			.then(function(exhibitions){
				var soloExhibitions = exhibitions.filter(function(exhibition){
					return exhibition.type === 'Solo';
				})
				return soloExhibitions;
			})
	}
	ExhibitionsFactory.fetchGroup = function(){
		return $http.get('/api/exhibitions/')
			.then(function(response){
				return response.data;
			})
			.then(function(exhibitions){
				var groupExhibitions = exhibitions.filter(function(exhibition){
					return (exhibition.type === 'Group')
				})
				return groupExhibitions;
			})
	}

	return ExhibitionsFactory;
})
