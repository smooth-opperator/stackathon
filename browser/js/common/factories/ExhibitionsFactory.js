app.factory('ExhibitionsFactory', function () {

    return {
            counterpoint : {
                key: 'counterpoint',
                title: 'Counterpoint',
                caption: 'Mark Moore Gallery, February 19-March 21, 2015, Los Angeles',
                order: 1,
                images: [
                    'http://i.imgur.com/dmB8BFt.jpg',
                    'http://i.imgur.com/S7rOz6G.jpg',
                    'http://i.imgur.com/iB90jUm.jpg',
                    'http://i.imgur.com/SuhdOlH.jpg',
                    'http://i.imgur.com/hce6KGr.jpg',
                    'http://i.imgur.com/OcQ9vSW.jpg',
                    'http://i.imgur.com/KUmKspd.jpg',
                    'http://i.imgur.com/r0PXLym.jpg',
                    'http://i.imgur.com/Yrn2BIy.jpg',
                    'http://i.imgur.com/gBa9U4h.jpg'
                ]
            },
            raster : {
                key: 'raster',
                title: 'Raster',
                caption: 'Galerie Stefan Roepke, October 17 - November 22, 2014, Cologne',
                order: 2,
                images: [
                    'http://i.imgur.com/xrBKeLo.jpg',
                    'http://i.imgur.com/agPMsEk.jpg',
                    'http://i.imgur.com/LZNCBet.jpg',
                    'http://i.imgur.com/dyIJaDR.jpg',
                    'http://i.imgur.com/x3YtNKa.jpg',
                    'http://i.imgur.com/tzg0FIU.jpg',
                    'http://i.imgur.com/HwEuVyC.jpg',
                    'http://i.imgur.com/CinaeIu.jpg',
                    'http://i.imgur.com/Zk86n5k.jpg',
                    'http://i.imgur.com/FHj9soC.jpg',
                    'http://i.imgur.com/ee4xLq7.jpg'
                ]
            },
            palinopsia : {
                key: 'palinopsia',
                title: 'Palinopsia',
                caption: 'Joshua Liner Gallery, February 27 - March 29, 2014, New York',
                order: 3,
                images: [
                    'http://i.imgur.com/q4VI7DR.jpg',
                    'http://i.imgur.com/7CjAr4a.jpg',
                    'http://i.imgur.com/LoSPc0H.jpg',
                    'http://i.imgur.com/TZ72LVX.jpg',
                    'http://i.imgur.com/c98wYZV.jpg'
                ]
            },
            projectRoom : {
                key: 'projectRoom',
                title: 'Project Room',
                caption: 'Mark Moore Gallery, July 27 - September 7, 2013, Los Angeles',
                order: 4,
                images: [
                    'http://i.imgur.com/XLjCGwR.jpg',
                    'http://i.imgur.com/rFWzCln.jpg',
                    'http://i.imgur.com/gqH51Wu.jpg',
                    'http://i.imgur.com/FC6Pk5E.jpg',
                    'http://i.imgur.com/RuCMtnJ.jpg'
                ]
            },
             eponymous : {
                key: 'eponymous',
                title: 'Eponymous',
                caption: 'Galerie Stefan Roepke, September 7 - October 12, 2012, Cologne',
                order: 5,
                images: [
                    'http://i.imgur.com/HuIPhY7.jpg',
                    'http://i.imgur.com/Ib0dB7x.jpg',
                    'http://i.imgur.com/mUwwuWK.jpg',
                    'http://i.imgur.com/ZEtURKt.jpg',
                    'http://i.imgur.com/oJofRTL.jpg',
                    'http://i.imgur.com/dBxTZOu.jpg',
                    'http://i.imgur.com/58hN8VY.jpg'
                ]
            },
            mfaThesis : {
                key: 'mfaThesis',
                title: 'MFA Thesis',
                caption: 'Times Square Gallery, December 12, 2012 - January 16, 2013, New York',
                order: 6,
                images: [
                    'http://i.imgur.com/YXoe1gW.jpg',
                    'http://i.imgur.com/ueyfvUf.jpg'
                ]
            }

    }

});

    // };

	// ExhibitionsFactory.fetchSolo = function(){

	// 	return $http.get('/api/exhibitions/')
	// 		.then(function(response){
	// 			return response.data;
	// 		})
	// 		.then(function(exhibitions){
	// 			var soloExhibitions = exhibitions.filter(function(exhibition){
	// 				return exhibition.type === 'Solo';
	// 			})
	// 			return soloExhibitions;
	// 		})
	// }
	// ExhibitionsFactory.fetchGroup = function(){
	// 	return $http.get('/api/exhibitions/')
	// 		.then(function(response){
	// 			return response.data;
	// 		})
	// 		.then(function(exhibitions){
	// 			var groupExhibitions = exhibitions.filter(function(exhibition){
	// 				return (exhibition.type === 'Group')
	// 			})
	// 			return groupExhibitions;
	// 		})
	// }

	// return ExhibitionsFactory;

