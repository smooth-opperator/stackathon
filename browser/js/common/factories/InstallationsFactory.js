app.factory('InstallationsFactory', function () {
    return {
        counterpointWindows : {
            key: 'counterpointWindows',
            title: 'Counterpoint',
            caption: 'Perforated Vinyl Window Installation at Mark Moore Gallery, Los Angeles, 2015',
            order: 1,
            images: [
                    '/images/counterpoint11.jpg',
                    '/images/counterpoint12.jpg',
                    '/images/counterpoint_windowdetail.jpg',
                    '/images/counterpoint_windowdetail2.jpg'
                ]
            // images: [
            //     'http://i.imgur.com/VSGcL8v.jpg',
            //     'http://i.imgur.com/b1v409F.jpg',
            //     'http://i.imgur.com/pjkjb2m.jpg',
            //     'http://i.imgur.com/r4JHa2i.jpg'
            // ]
        },
        udkRundgang : {
            key: 'udkRundgang',
            title: 'Rundgang',
            caption: 'Colored Tape Installation on Floor for UDK Rundgang, Berlin, 2012',
            order: 2,
            images: [
                    '/images/udk-floor1_700.jpg',
                    '/images/udk-floor2_700.jpg',
                    '/images/udk-floor3.jpg'
                ]
            // images: [
            //     'http://i.imgur.com/AzJfk44.jpg',
            //     'http://i.imgur.com/hIciWpd.jpg'
            // ]
        },
        screening : {
            key: 'screening',
            title: 'Screen',
            caption: 'Acrylic Paint and Tape on Wall at Galerie Roepke, Cologne, 2012',
            order: 3,
            images: [
                    '/images/floatingpanel.jpg'
                ]

            // images: [
            //     'http://i.imgur.com/Q7qgkMp.jpg'
            // ]
        },
        fold : {
            key: 'fold',
            title: 'Fold',
            caption: 'Acrylic and Spray Paint on Wall at Edificio Lutetia (FAAP), São Paulo, 2012',
            order: 4,
            images: [
                    '/images/fold.jpg'
                ]

            // images: [
            //     'http://i.imgur.com/sHIKGZN.jpg'
            // ]
        },
        cube : {
            key: 'cube',
            title: 'Cube',
            caption: 'Acrylic Paint on Wall at Edificio Lutetia (FAAP), São Paulo, 2012',
            order: 5,
            images: [
                    '/images/cube.jpg'
                ]
        },
        blueGold : {
            key: 'blueGold',
            title: 'Blue and Gold',
            caption: 'Acrylic Paint on Wall at Hunter MFA Studio, New York, 2011',
            order: 6,
            images: [
                    '/images/moire1104a.jpg',
                    '/images/moire1104b.jpg'
                ]

            // images: [
            //     'http://i.imgur.com/a3xwEdW.jpg',
            //     'http://i.imgur.com/PSFzk0Z.jpg'
            // ]
        },
        reflection : {
            key: 'reflection',
            title: 'Reflection',
            caption: 'Acrylic Paint on Wall and Floor at Hunter MFA Studio, New York, 2011',
            order: 7,
            images: [
                    '/images/wallfloor1.jpg',
                    '/images/wallfloor2.jpg'
                ]

            // images: [
            //     'http://i.imgur.com/OZDSwjT.jpg',
            //     'http://i.imgur.com/wdDrEv8.jpg'
            // ]
        }

    }

})


// var InstallationsFactory = {};

//     InstallationsFactory.fetchAll = function(){
//         return $http.get('/api/installations/')
//             .then(function(response){
//                 return response.data;
//             })
//     }
//     return InstallationsFactory;
