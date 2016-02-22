app.factory('ExhibitionsFactory', function () {

    return {
            counterpoint : {
                key: 'counterpoint',
                title: 'Counterpoint',
                caption: 'Mark Moore Gallery, February 19-March 21, 2015, Los Angeles',
                order: 1,
                images: [
                    '/images/counterpoint1.jpg',
                    '/images/counterpoint2.jpg',
                    '/images/counterpoint3.jpg',
                    '/images/counterpoint4.jpg',
                    '/images/counterpoint5.jpg',
                    '/images/counterpoint6.jpg',
                    '/images/counterpoint7.jpg',
                    '/images/counterpoint8.jpg',
                    '/images/counterpoint9.jpg',
                    '/images/counterpoint10.jpg',
                    '/images/counterpoint11.jpg',
                    '/images/counterpoint12.jpg'

                ]
                // images: [
                //     'http://i.imgur.com/dmB8BFt.jpg',
                //     'http://i.imgur.com/S7rOz6G.jpg',
                //     'http://i.imgur.com/iB90jUm.jpg',
                //     'http://i.imgur.com/SuhdOlH.jpg',
                //     'http://i.imgur.com/hce6KGr.jpg',
                //     'http://i.imgur.com/OcQ9vSW.jpg',
                //     'http://i.imgur.com/KUmKspd.jpg',
                //     'http://i.imgur.com/r0PXLym.jpg',
                //     'http://i.imgur.com/Yrn2BIy.jpg',
                //     'http://i.imgur.com/gBa9U4h.jpg'
                // ]
            },
            raster : {
                key: 'raster',
                title: 'Raster',
                caption: 'Galerie Stefan Roepke, October 17 - November 22, 2014, Cologne',
                order: 2,
                images: [
                    '/images/raster1.jpg',
                    '/images/raster2.jpg',
                    '/images/raster3.jpg',
                    '/images/raster4.jpg',
                    '/images/raster5.jpg',
                    '/images/raster6.jpg',
                    '/images/raster7.jpg',
                    '/images/raster8.jpg',
                    '/images/raster9.jpg',
                    '/images/PR_raster.png'

                ]
                // images: [
                //     'http://i.imgur.com/xrBKeLo.jpg',
                //     'http://i.imgur.com/agPMsEk.jpg',
                //     'http://i.imgur.com/LZNCBet.jpg',
                //     'http://i.imgur.com/dyIJaDR.jpg',
                //     'http://i.imgur.com/x3YtNKa.jpg',
                //     'http://i.imgur.com/tzg0FIU.jpg',
                //     'http://i.imgur.com/HwEuVyC.jpg',
                //     'http://i.imgur.com/CinaeIu.jpg',
                //     'http://i.imgur.com/Zk86n5k.jpg',
                //     'http://i.imgur.com/FHj9soC.jpg',
                //     'http://i.imgur.com/ee4xLq7.jpg'
                // ]
            },
            palinopsia : {
                key: 'palinopsia',
                title: 'Palinopsia',
                caption: 'Joshua Liner Gallery, February 27 - March 29, 2014, New York',
                order: 3,
                images: [
                    '/images/palinopsia01.jpg',
                    '/images/palinopsia02.jpg',
                    '/images/palinopsia03.jpg',
                    '/images/palinopsia04.jpg',
                    '/images/palinopsia05.jpg'

                ]
                // images: [
                //     'http://i.imgur.com/q4VI7DR.jpg',
                //     'http://i.imgur.com/7CjAr4a.jpg',
                //     'http://i.imgur.com/LoSPc0H.jpg',
                //     'http://i.imgur.com/TZ72LVX.jpg',
                //     'http://i.imgur.com/c98wYZV.jpg'
                // ]
            },
            projectRoom : {
                key: 'projectRoom',
                title: 'Project Room',
                caption: 'Mark Moore Gallery, July 27 - September 7, 2013, Los Angeles',
                order: 4,
                images: [
                    '/images/projectroom01.jpg',
                    '/images/projectroom02.jpg',
                    '/images/projectroom03.jpg',
                    '/images/projectroom04.jpg',
                    '/images/projectroom05.jpg'

                ]
                // images: [
                //     'http://i.imgur.com/XLjCGwR.jpg',
                //     'http://i.imgur.com/rFWzCln.jpg',
                //     'http://i.imgur.com/gqH51Wu.jpg',
                //     'http://i.imgur.com/FC6Pk5E.jpg',
                //     'http://i.imgur.com/RuCMtnJ.jpg'
                // ]
            },
             eponymous : {
                key: 'eponymous',
                title: 'Eponymous',
                caption: 'Galerie Stefan Roepke, September 7 - October 12, 2012, Cologne',
                order: 5,
                images: [
                    '/images/roepke1.jpg',
                    '/images/roepke2.jpg',
                    '/images/roepke3.jpg',
                    '/images/roepke4.jpg',
                    '/images/roepke5.jpg',
                    '/images/roepke6.jpg',
                    '/images/PR_roepke5.png'

                ]
                // images: [
                //     'http://i.imgur.com/HuIPhY7.jpg',
                //     'http://i.imgur.com/Ib0dB7x.jpg',
                //     'http://i.imgur.com/mUwwuWK.jpg',
                //     'http://i.imgur.com/ZEtURKt.jpg',
                //     'http://i.imgur.com/oJofRTL.jpg',
                //     'http://i.imgur.com/dBxTZOu.jpg',
                //     'http://i.imgur.com/58hN8VY.jpg'
                // ]
            },
            mfaThesis : {
                key: 'mfaThesis',
                title: 'MFA Thesis',
                caption: 'Times Square Gallery, December 12, 2012 - January 16, 2013, New York',
                order: 6,
                images: [
                    '/images/thesis)install1.jpg',
                    '/images/thesis)install2.jpg'

                ]
                // images: [
                //     'http://i.imgur.com/YXoe1gW.jpg',
                //     'http://i.imgur.com/ueyfvUf.jpg'
                // ]
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

