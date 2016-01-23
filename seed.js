/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
// var User = Promise.promisifyAll(mongoose.model('User'));
var Exhibitions = Promise.promisifyAll(mongoose.model('Exhibitions'));
var Paintings = Promise.promisifyAll(mongoose.model('Paintings'));
var WorksOnPaper = Promise.promisifyAll(mongoose.model('WorksOnPaper'));
var Installations = Promise.promisifyAll(mongoose.model('Installations'));
var Videos = Promise.promisifyAll(mongoose.model('Videos'));
var Texts = Promise.promisifyAll(mongoose.model('Texts'));
// var seedUsers = function () {
//     var users = [
//         {
//             email: 'testing@fsa.com',
//             password: 'password'
//         },
//         {
//             email: 'obama@gmail.com',
//             password: 'potus'
//         }
//     ];
//     return User.createAsync(users);
// };

var seedExhibitions = function() {

    var exhibitions = [
        {
            title: 'Counterpoint',
            gallery: 'Mark Moore Gallery',
            type: 'Solo',
            dates: {
                startM: 'February',
                startD: 19,
                EndM: 'March',
                EndD: 21,
                year: 2015
            },
            location: {
                city: 'Los Angeles',
                state: 'CA'
            },
            images: [
                'http://www.julieoppermann.com/gallery/counterpoint1.jpg', 
                'http://www.julieoppermann.com/gallery/counterpoint2.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint3.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint4.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint5.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint6.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint7.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint8.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint9.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint10.jpg'
                ],
            onWebsite: true
        },
        {
            title: 'Raster',
            gallery: 'Galerie Roepke',
            type: 'Solo',
            dates: {
                startM: 'October',
                startD: 17,
                EndM: 'November',
                EndD: 22,
                year: 2014
            },
            location: {
                city: 'Cologne',
                state: 'DE'
            },
            images: [
                'http://www.julieoppermann.com/gallery/raster1.jpg',
                'http://www.julieoppermann.com/gallery/raster2.jpg',
                'http://www.julieoppermann.com/gallery/raster3.jpg',
                'http://www.julieoppermann.com/gallery/raster4.jpg',
                'http://www.julieoppermann.com/gallery/raster5.jpg',
                'http://www.julieoppermann.com/gallery/raster6.jpg',
                'http://www.julieoppermann.com/gallery/raster7.jpg',
                'http://www.julieoppermann.com/gallery/raster8.jpg',
                'http://www.julieoppermann.com/gallery/raster9.jpg',
                'http://www.julieoppermann.com/gallery/raster10.jpg',
                'http://www.julieoppermann.com/gallery/PR_raster.jpg'
            ],
            onWebsite: true
        },
        {
            title: 'Palinopsia',
            gallery: 'Joshua Liner Gallery',
            type: 'Solo',
            dates: {
                startM: 'February',
                startD: 27,
                EndM: 'March',
                EndD: 29,
                year: 2014
            },
            location: {
                city: 'New York',
                state: 'NY'
            },
            images: [
                'http://www.julieoppermann.com/gallery/palinopsia01.jpg',
                'http://www.julieoppermann.com/gallery/palinopsia02.jpg',
                'http://www.julieoppermann.com/gallery/palinopsia03.jpg',
                'http://www.julieoppermann.com/gallery/palinopsia04.jpg',
                'http://www.julieoppermann.com/gallery/palinopsia05.jpg'
            ],
            onWebsite: true
        },
        {
            title: 'Project Room',
            gallery: 'Mark Moore Gallery',
            type: 'Solo',
            dates: {
                startM: 'July',
                startD: 27,
                EndM: 'September',
                EndD: 7,
                year: 2013
            },
            location: {
                city: 'Los Angeles',
                state: 'CA'
            },
            images: [
                'http://www.julieoppermann.com/gallery/projectroom01.jpg',
                'http://www.julieoppermann.com/gallery/projectroom02.jpg',
                'http://www.julieoppermann.com/gallery/projectroom03.jpg',
                'http://www.julieoppermann.com/gallery/projectroom04.jpg',
                'http://www.julieoppermann.com/gallery/projectroom05.jpg'
            ],
            onWebsite: true
        },
        {
            title: 'Julie Oppermann',
            gallery: 'Galerie Roepke',
            type: 'Solo',
            dates: {
                startM: 'September',
                startD: 7,
                EndM: 'October',
                EndD: 12,
                year: 2012
            },
            location: {
                city: 'Cologne',
                state: 'DE'
            },
            images: [
                'http://www.julieoppermann.com/gallery/roepke1.jpg',
                'http://www.julieoppermann.com/gallery/roepke2.jpg',
                'http://www.julieoppermann.com/gallery/roepke3.jpg',
                'http://www.julieoppermann.com/gallery/roepke4.jpg',
                'http://www.julieoppermann.com/gallery/roepke5.jpg',
                'http://www.julieoppermann.com/gallery/roepke6.jpg',
                'http://www.julieoppermann.com/gallery/PR_roepke.jpg'
            ],
            onWebsite: true
        },
        {
            title: 'MFA Thesis',
            gallery: 'Hunter College Times Square Gallery',
            type: 'Solo',
            dates: {
                startM: 'December',
                startD: 12,
                EndM: 'January',
                EndD: 16,
                year: 2012
            },
            location: {
                city: 'New York',
                state: 'NY'
            },
            images: [
                'http://www.julieoppermann.com/gallery/thesis_install1.jpg',
                'http://www.julieoppermann.com/gallery/thesis_install2.jpg'
                ],
            onWebsite: true
        },
        {
            title: 'Tile',
            gallery: 'FrontViews Temporary at Kunstquartier Bethanien',
            type: 'Group',
            artists: ['Astali / Peirce', 'Andreas Helfer', 'Nathan Hylden', 'Henry Kleine', 'Roman Liska', 'Julie Oppermann', 'Hannu Prinz', 'Michael Rockel', 'Elmar Vestner', 'Johannes Weiss', 'Michaela Zimmer'],
            dates: {
                startM: 'September',
                startD: 17,
                EndM: 'September',
                EndD: 21,
                year: 2014
            },
            location: {
                city: 'Berlin',
                state: 'DE'
            },
            images: [
                'http://frontviews.de/images/410/410_large.jpg',
                'http://frontviews.de/images/412/412_large.jpg',
                'http://frontviews.de/images/413/413_large.jpg',
                'http://frontviews.de/images/415/415_large.jpg',
                'http://frontviews.de/images/417/417_large.jpg',
                'http://frontviews.de/images/419/419_large.jpg',
                'http://frontviews.de/images/421/421_large.jpg',
                'http://frontviews.de/images/422/422_large.jpg',
                'http://frontviews.de/images/424/424_large.jpg',
                'http://frontviews.de/images/425/425_large.jpg',
                'http://frontviews.de/images/432/432_large.jpg',
                ],
            onWebsite: true
        },
        {
            title: 'Suckstract2',
            gallery: 'Städtische Galerie Remscheid',
            type: 'Group',
            artists: ['Ralf Dereich', 'Dani Jakob', 'Shila Khatami', 'Henry Kleine', 'Daniel Lergon', 'Julie Oppermann', 'Max Schulze', 'Anja Schwörer', 'Gabriel Vormstein','Michaela Zimmer'],
            dates: {
                startM: 'June',
                startD: 15,
                EndM: 'August',
                EndD: 31,
                year: 2014
            },
            location: {
                city: 'Remscheid',
                state: 'DE'
            },
            images: [
                'http://1.bp.blogspot.com/-1e5ZfnU7HUs/U_dx87HRy4I/AAAAAAAAC3I/yOMo7P9Lt5c/s1600/Suckstract%2B048.jpg',
                'http://4.bp.blogspot.com/-mTHErZ9plbg/U_d2cnorGeI/AAAAAAAAC6s/QcR3Pe5u0BI/s1600/Suckstract%2B061.jpg',
                'http://1.bp.blogspot.com/-gIBEocFLLxg/U_dz49jTkHI/AAAAAAAAC4c/5QfsTQueNLg/s1600/Suckstract%2B043.jpg',
                'http://4.bp.blogspot.com/-TIPPM6dOUyQ/U_d3ZxMVEdI/AAAAAAAAC7c/JURYGpuKpU8/s1600/Suckstract%2B067.jpg',
                'http://2.bp.blogspot.com/-e1VXW9djh6M/U_d1oKu-TiI/AAAAAAAAC58/tNWgR-M04Ec/s1600/Suckstract%2B055.jpg',
                'http://1.bp.blogspot.com/-ov_WdlWTBHk/U_d03qDWCqI/AAAAAAAAC5M/qk6mZe98pDQ/s1600/Suckstract%2B049.jpg',
                'http://3.bp.blogspot.com/-jKxZhCb3lMk/U_d0UpQ0SnI/AAAAAAAAC40/XlsHkpy6ZGw/s1600/Suckstract%2B046.jpg',
                'http://2.bp.blogspot.com/-ahKktDChFLM/U_d0KF_zGiI/AAAAAAAAC4k/TslAlkkqKW8/s1600/Suckstract%2B044.jpg',
                'http://2.bp.blogspot.com/-cSRCc8YCRv4/U_dzWl5zYgI/AAAAAAAAC30/dvhSNWOBfgw/s1600/Suckstract%2B038.jpg',
                'http://3.bp.blogspot.com/-ZWe0DO7HEtU/U_dzCruVBEI/AAAAAAAAC3k/GFSZseh7Kfc/s1600/Suckstract%2B035.jpg',
                'http://4.bp.blogspot.com/-BPOYr1DgbSo/U_dzhtmwRnI/AAAAAAAAC38/-H4vNr2P2gI/s1600/Suckstract%2B040.jpg',
                'http://2.bp.blogspot.com/-d51TlpjJ8m4/U_d2PXRQjlI/AAAAAAAAC6k/DwQt7h-uD58/s1600/Suckstract%2B060.jpg',
                'http://4.bp.blogspot.com/-8C5eL7UwBQ8/U_dzt3noEXI/AAAAAAAAC4M/Vu__eHoMEUg/s1600/Suckstract%2B041.jpg',
                'http://4.bp.blogspot.com/-LztI_Jp4HmA/U_d4wXiqGrI/AAAAAAAAC8c/soBw4IVGFf4/s1600/Suckstract%2B076.jpg',
                'http://3.bp.blogspot.com/-i38dFvJ6mzM/U_d3Bu8Z3LI/AAAAAAAAC7M/YZi7IFU0Llc/s1600/Suckstract%2B065.jpg',
                'http://4.bp.blogspot.com/-z9-CqGCrqH4/U_d1wRzkifI/AAAAAAAAC6E/n2FFV1HliT4/s1600/Suckstract%2B056.jpg',
                'http://3.bp.blogspot.com/-U5eNqm28nxU/U_d11cEy6bI/AAAAAAAAC6M/WJejgPzVlbE/s1600/Suckstract%2B057.jpg',
                'http://4.bp.blogspot.com/-qJzZGdLBUtk/U_d1Y7PgfSI/AAAAAAAAC50/H7Ja8DVxsVQ/s1600/Suckstract%2B054.jpg',
                ],
            onWebsite: true
        },
         {
            title: 'Der Grund ist nicht Licht, sondern Nacht',
            gallery: 'Galerie Christian Ehrentraut',
            type: 'Group',
            artists: ['Julie Oppermann', 'Yorgos Stamkopoulos', 'Alexander Wolff'],
            dates: {
                startM: 'April',
                startD: 30,
                EndM: 'June',
                EndD: 7,
                year: 2014
            },
            location: {
                city: 'Berlin',
                state: 'DE'
            },
            images: [
                'http://www.julieoppermann.com/gallery/ehrentraut01.jpg',
                'http://www.julieoppermann.com/gallery/dmk_m2-4.jpg',
                'http://www.julieoppermann.com/gallery/ehrentraut02.jpg',
                'http://www.julieoppermann.com/gallery/ehrentraut03.jpg',
                'http://www.julieoppermann.com/gallery/ehrentraut04.jpg',
                'http://www.julieoppermann.com/gallery/ehrentraut05.jpg',
                'http://www.julieoppermann.com/gallery/ehrentraut06.jpg',
                'http://www.julieoppermann.com/gallery/ehrentraut07.jpg',
                'http://www.julieoppermann.com/gallery/Williams_Night_Under_Light.jpg'
            ],
            onWebsite: true
        },
        {
            title: 'Suckstract',
            gallery: 'Projektraum Bethanien',
            type: 'Group',
            artists: ['Ralf Dereich', 'Dani Jakob', 'Shila Khatami', 'Henry Kleine', 'Daniel Lergon', 'Julie Oppermann', 'Max Schulze', 'Anja Schwörer', 'Gabriel Vormstein','Michaela Zimmer'],
            dates: {
                startM: 'September',
                startD: 20,
                EndM: 'September',
                EndD: 22,
                year: 2013
            },
            location: {
                city: 'Berlin',
                state: 'DE'
            },
            images: [
                'http://4.bp.blogspot.com/-IJadDZej1l0/UkHteWImYII/AAAAAAAAAQk/BQXrp0Wh274/s640/A_G01.jpg',
                'http://4.bp.blogspot.com/-wULB6yyTA80/UkHtecNuKpI/AAAAAAAAAQg/wLPtFmXLfZ0/s640/A_M_A01.jpg',
                'http://4.bp.blogspot.com/-FxnoZJa_L_k/UkHteIsLfGI/AAAAAAAAAQc/bEHCGGx_Pk8/s640/D_D_D_R01.jpg',
                'http://2.bp.blogspot.com/-LHFa2kuz6lo/UkHte6afGRI/AAAAAAAAAQo/gG6peY13VUU/s640/D_S_D_D01.jpg',
                'http://2.bp.blogspot.com/-U1wzhqjfsuI/UkHtf_wvtLI/AAAAAAAAARI/ns8pE3poSgY/s640/H01.jpg',
                'http://4.bp.blogspot.com/-2w1wAmn3g2w/U3vJmEen3NI/AAAAAAAACxk/PZaA8rXGaxE/s1600/ss_10s.jpg',
                'http://2.bp.blogspot.com/-fnkbMutzyUg/U3vJ8b99jFI/AAAAAAAACxs/82Ib9IZkGrk/s1600/ss_18s.jpg',
                'http://4.bp.blogspot.com/-seZ26wHSnqw/UkH3XPZ-cZI/AAAAAAAAAUQ/GfgPxjiUDX4/s640/M_M_H01.jpg',
                'http://4.bp.blogspot.com/-O9_dKTJY_5s/U3vKVP0jjPI/AAAAAAAACx8/aq1OziESlzs/s1600/ss_04s.jpg',
                'http://4.bp.blogspot.com/-IKZgv1lvkso/U3vKruVHdxI/AAAAAAAACyM/f3q586OyelU/s1600/ss_12s.jpg',
                'http://2.bp.blogspot.com/-RwkA4I3Eiik/UkHult7cO5I/AAAAAAAAASo/umHr-ia5AxQ/s640/ss_15s.jpg',
                'http://2.bp.blogspot.com/-DOzqSx0g9X0/U3vLTMhuDLI/AAAAAAAACyc/gYcofKZkBdM/s1600/ss_17s.jpg'
            ],
            onWebsite: true
        }
        
       ]
    return Exhibitions.createAsync(exhibitions);

};

var seedPaintings = function() {

    var paintings = [
        {
            title: '1501',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1501.jpg',
            onWebsite: true
        },
           {
            title: '1502',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1502.jpg',
            onWebsite: true
        },
           {
            title: '1503',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1503.jpg',
            onWebsite: true
        },
           {
            title: '1504',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1504.jpg',
            onWebsite: true
        },
           {
            title: '1505',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1505.jpg',
            onWebsite: true
        },
           {
            title: '1506',
            series: 'Counterpoint',
            materials: 'Acrylic on Wood Panel',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1506.jpg',
            onWebsite: true
        },
           {
            title: '1507',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1507.jpg',
            onWebsite: true
        },
           {
            title: '1508',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [78, 72],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1508.jpg',
            onWebsite: true
        },
           {
            title: '1509',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [78, 72],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1509.jpg',
            onWebsite: true
        },
           {
            title: '1510',
            series: 'Counterpoint',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1510.jpg',
            onWebsite: true
        },
           {
            title: '1511',
            series: 'Counterpoint',
            materials: 'Acrylic on Wood Panel',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            location: 'Mark Moore Gallery',
            year: 2015,
            image: 'http://www.julieoppermann.com/gallery/1511.jpg',
            onWebsite: true
        },
           {
            title: '1410',
            series: 'Raster',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1410.jpg',
            onWebsite: true
        },
            {
            title: '1411',
            series: 'Raster',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1411.jpg',
            onWebsite: true
        },
            {
            title: '1412',
            series: 'Raster',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1412.jpg',
            onWebsite: true
        },
           {
            title: '1413',
            series: 'Raster',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1413.jpg',
            onWebsite: true
        },
           {
            title: '1415',
            series: 'Raster',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1415.jpg',
            onWebsite: true
        },
           {
            title: '14024',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/14024.jpg',
            onWebsite: true
        },
           {
            title: '1409',
            series: 'Raster',
            materials: 'Acrylic on Wood Panel',
            scale: 'Large',
            dimensions: [140, 110],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1409.jpg',
            onWebsite: true
        },
           {
            title: '1408',
            series: 'Raster',
            materials: 'Acrylic on Wood Panel',
            scale: 'Large',
            dimensions: [140, 110],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1408.jpg',
            onWebsite: true
        },
           {
            title: '1407',
            series: 'Raster',
            materials: 'Acrylic on Wood Panel',
            scale: 'Large',
            dimensions: [140, 110],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1407.jpg',
            onWebsite: true
        },
           {
            title: '1406',
            series: 'Raster',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1406.jpg',
            onWebsite: true
        },
           {
            title: '1405',
            series: 'Raster',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/1405.jpg',
            onWebsite: true
        },
           {
            title: '1312',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/1312.jpg',
            onWebsite: true
        },
           {
            title: '1311',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/1311.jpg',
            onWebsite: true
        },
           {
            title: '1301',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [72, 60],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/1301_700.jpg',
            onWebsite: true
        },
          {
            title: '1230',
            series: 'Screen',
            materials: 'Oil on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/th1230.jpg',
            detail: 'http://www.julieoppermann.com/gallery/th1230_detail.jpg',
            onWebsite: true
        },
           {
            title: '1229',
            series: 'Screen',
            materials: 'Oil on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/th1229.jpg',
            detail: 'http://www.julieoppermann.com/gallery/th1229_detail.jpg',
            onWebsite: true
        },
           {
            title: '1228',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [72, 60],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/th1228.jpg',
            onWebsite: true
        },
           {
            title: '1226',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/th1226.jpg',
            onWebsite: true
        },
           {
            title: '1225',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/th1225.jpg',
            onWebsite: true
        },
           {
            title: '1224',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [72, 60],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/th1224.jpg',
            onWebsite: true
        },
           {
            title: '1223',
            series: 'Screen',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [72, 60],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/th1223.jpg',
            onWebsite: true
        },
           {
            title: '1201',
            series: 'Glitch',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 68],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/m1201.jpg',
            onWebsite: true
        },
            {
            title: '1214',
            series: 'Glitch',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [210, 190],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/1214.jpg',
            onWebsite: true
        },
            {
            title: '1215 Triptych',
            series: 'Glitch',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [210, 570],
            unit: 'cm',
            year: 2012,
            image: 'http://julieoppermann.com/gallery/b1215_tritych.jpg',
            onWebsite: true
        },
            {
            title: '1221',
            series: 'Glitch',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [170, 140],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/1221.jpg',
            onWebsite: true
        },
            {
            title: '1101',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [66, 66],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1101.jpg',
            onWebsite: true
        },
            {
            title: '1102',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1102.jpg',
            onWebsite: true
        },
            {
            title: '1103',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 56],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1103.jpg',
            onWebsite: true
        },
            {
            title: '1105',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [66, 66],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1105.jpg',
            onWebsite: true
        },
            {
            title: '1106',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1106.jpg',
            onWebsite: true
        },
            {
            title: '1107',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1107.jpg',
            onWebsite: true
        },
            {
            title: '1111',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1111.jpg',
            onWebsite: true
        },
            {
            title: '1113',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [82, 74],
            unit: 'in',
            year: 2011,
            image: 'http://www.julieoppermann.com/gallery/moire1113.jpg',
            onWebsite: true
        },
          {
            title: '1120',
            series: 'Glitch',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2011,
            image: 'http://julieoppermann.com/gallery/m1120.jpg',
            onWebsite: true
        },
         {
            title: '1203',
            series: 'Glitch',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2011,
            image: 'http://julieoppermann.com/gallery/m1203.jpg',
            onWebsite: true
        },
            {
            title: '1011',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [82, 74],
            unit: 'in',
            year: 2010,
            image: 'http://www.julieoppermann.com/gallery/moire1011.jpg',
            onWebsite: true
        },
            {
            title: '1021',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [60, 60],
            unit: 'in',
            year: 2010,
            image: 'http://www.julieoppermann.com/gallery/moire1021.jpg',
            onWebsite: true
        },
            {
            title: '1022',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [60, 60],
            unit: 'in',
            year: 2010,
            image: 'http://www.julieoppermann.com/gallery/moire1022.jpg',
            onWebsite: true
        },
            {
            title: '1023',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [60, 60],
            unit: 'in',
            year: 2010,
            image: 'http://www.julieoppermann.com/gallery/moire1023.jpg',
            onWebsite: true
        },
            {
            title: '1024',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2010,
            image: 'http://www.julieoppermann.com/gallery/moire1024.jpg',
            onWebsite: true
        },
            {
            title: '1026',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [00, 00],
            unit: 'in',
            year: 2010,
            image: 'http://www.julieoppermann.com/gallery/moire1026.jpg',
            onWebsite: true
        },
            {
            title: '1029',
            series: 'Moiré',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [68, 68],
            unit: 'in',
            year: 2010,
            image: 'http://www.julieoppermann.com/gallery/moire1029.jpg',
            onWebsite: true
        },
            {
            title: 'DB1301',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [00, 00],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/DB1301.jpg',
            onWebsite: true    
        },
        {
            title: 'DB1303',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [00, 00],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/DB1303.jpg',
            onWebsite: true    
        },
         {
            title: 'DB1304',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [00, 00],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/DB1304.jpg',
            onWebsite: true    
        },
         {
            title: 'DB1305',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [00, 00],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/DB1305.jpg',
            onWebsite: true    
        },
        {
            title: 'DB1307',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [00, 00],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/DB1307.jpg',
            onWebsite: true    
        },
        {
            title: 'al1207',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/al1207.jpg',
            onWebsite: true    
        },
         {
            title: 'al1209',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/al1209.jpg',
            onWebsite: true    
        },
        {
            title: 'al1210',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/al1210.jpg',
            onWebsite: true    
        },
        {
            title: 'al1212',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/al1212.jpg',
            onWebsite: true    
        },
        {
            title: 'al1213',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/al1213.jpg',
            onWebsite: true    
        },
        {
            title: 'b1206',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [100, 70],
            unit: 'cm',
            year: 2012,
            image: 'http://julieoppermann.com/gallery/B1206.jpg',
            onWebsite: true    
        },
        {
            title: 'b1205',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [100, 70],
            unit: 'cm',
            year: 2012,
            image: 'http://julieoppermann.com/gallery/B1205.jpg',
            onWebsite: true    
        },
        {
            title: 'b1204',
            series: 'Aluminum Panels',
            materials: 'Acrylic on Aluminum Panel',
            scale: 'Small',
            dimensions: [100, 70],
            unit: 'cm',
            year: 2012,
            image: 'http://julieoppermann.com/gallery/B1204.jpg',
            onWebsite: true    
        },
        {
            title: 'm1118',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [30, 24],
            unit: 'in',
            year: 2011,
            image: 'http://julieoppermann.com/gallery/m1118.jpg',
            onWebsite: true    
        },
         {
            title: 'm1119',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [30, 24],
            unit: 'in',
            year: 2011,
            image: 'http://julieoppermann.com/gallery/m1119.jpg',
            onWebsite: true    
        },
        {
            title: 'm1202',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [30, 24],
            unit: 'in',
            year: 2012,
            image: 'http://julieoppermann.com/gallery/m1202.jpg',
            onWebsite: true    
        },
        {
            title: 'p1302',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2013,
            image: 'http://julieoppermann.com/gallery/m1202.jpg',
            onWebsite: true    
        },
        {
            title: 'p1303',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2013,
            image: 'http://julieoppermann.com/gallery/1303.jpg',
            onWebsite: true    
        },
        {
            title: 'p1304',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2013,
            image: 'http://julieoppermann.com/gallery/1304.jpg',
            onWebsite: true    
        },
        {
            title: 'p1305',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2013,
            image: 'http://julieoppermann.com/gallery/1305.jpg',
            onWebsite: true    
        },
        {
            title: 'p1306',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2013,
            image: 'http://julieoppermann.com/gallery/1306.jpg',
            onWebsite: true    
        },
        {
            title: 'p1307',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2013,
            image: 'http://julieoppermann.com/gallery/1307.jpg',
            onWebsite: true    
        },
        {
            title: 'p1308',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [70, 70],
            unit: 'cm',
            year: 2013,
            image: 'http://julieoppermann.com/gallery/1308.jpg',
            onWebsite: true    
        },
        {
            title: 'dmks03',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s03.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk s04',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s04.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk s05',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s05.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk s06',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s06.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk s07',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s07.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk s08',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s08.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk s09',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s09.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk 1401',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1401.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk 1402',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1402.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk 1403',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1403.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk 1404',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1404.jpg',
            onWebsite: true    
        },
        {
            title: 'dmk 1405',
            series: 'Wood Panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1405.jpg',
            onWebsite: true    
        },



    ]
    
    return Paintings.createAsync(paintings);
}

var seedWorksOnPaper = function() {

    var worksonpaper = [
        {
            title: 'wp 1303',
            series: 'Works On Paper',
            category: 'Painting',
            materials: 'Acrylic and checked tape on paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/wp1303_700.jpg',
            onWebsite: true
        },
        {
            title: 'wp 1403',
            series: 'Works On Paper',
            category: 'Painting',
            materials: 'Spray paint on Yupo Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/wp1403.jpg',
            onWebsite: true
        },
        {
            title: 'wp 1402',
            series: 'Works On Paper',
            category: 'Painting',
            materials: 'Spray Paint on Yupo Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/wp1402.jpg',
            onWebsite: true
        },
         {
            title: 'wp 1222',
            series: 'Works On Paper',
            category: 'Painting',
            materials: 'Acrylic and Spray Paint on Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/wp1222.jpg',
            onWebsite: true
        },
         {
            title: 'ypf 01',
            series: 'YPF',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypf01_700.jpg',
            onWebsite: true
        },
        {
            title: 'ypf 02',
            series: 'YPF',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypf02_700.jpg',
            onWebsite: true
        },
        {
            title: 'ypf 03',
            series: 'YPF',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypf03_700.jpg',
            onWebsite: true
        },
        {
            title: 'ypf 04',
            series: 'YPF',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypf04_700.jpg',
            onWebsite: true
        },
        {
            title: 'ypsp 01',
            series: 'YPSP',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypsp01.jpg',
            onWebsite: true
        },
        {
            title: 'ypsp 02',
            series: 'YPSP',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypsp02.jpg',
            onWebsite: true
        },
        {
            title: 'ypsp 03',
            series: 'YPSP',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypsp03.jpg',
            onWebsite: true
        },
        {
            title: 'ypsp 04',
            series: 'YPSP',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypsp04.jpg',
            detail: 'http://www.julieoppermann.com/gallery/ypsp04_detail.jpg',
            onWebsite: true
        },
        {
            title: 'ypsp 05',
            series: 'YPSP',
            category: 'Painting',
            materials: 'Acrylic and tape on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypsp05.jpg',
            onWebsite: true
        },
        {
            title: 'ypsp 07',
            series: 'YPSP',
            category: 'Painting',
            materials: 'Acrylic and on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypsp07.jpg',
            onWebsite: true
        },
        {
            title: 'ypsp 08',
            series: 'YPSP',
            category: 'Painting',
            materials: 'Acrylic on Yupo Paper',
            dimensions: [25, 20],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/ypsp08.jpg',
            onWebsite: true
        },
         {
            title: 'dmk01',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk01.jpg',
            onWebsite: true
        },
        {
            title: 'dmk02',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk02.jpg',
            onWebsite: true
        },
        {
            title: 'dmk03',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk03.jpg',
            onWebsite: true
        },
        {
            title: 'dmk04',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk04.jpg',
            onWebsite: true
        },
        {
            title: 'dmk05',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk05.jpg',
            onWebsite: true
        },
        {
            title: 'dmk06',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk06.jpg',
            onWebsite: true
        },
        {
            title: 'dmk07',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk07.jpg',
            onWebsite: true
        },
        {
            title: 'dmk08',
            series: 'DMK',
            category: 'Silkscreen',
            materials: 'Silkscreen Monotype on Black Paper',
            dimensions: [22, 15],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/dmk08.jpg',
            onWebsite: true
        },
        {
            title: 'bpp blue',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Black Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/bpp-blue.jpg',
            onWebsite: true
        },
        {
            title: 'bpp green',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Black Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/bpp-green.jpg',
            onWebsite: true
        },
        {
            title: 'bpp grey',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Black Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/bpp-grey.jpg',
            onWebsite: true
        },
        {
            title: 'bpp pink-grey',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Black Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/bpp-pink-grey.jpg',
            onWebsite: true
        },
         {
            title: 'wpp noise 1',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/wpp-noise1.jpg',
            onWebsite: true
        },
        {
            title: 'wpp noise 2',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/wpp-noise2.jpg',
            onWebsite: true
        },
        {
            title: 'wpp red',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/wpp-red.jpg',
            onWebsite: true
        },

        ]
}

var seedInstallations = function() {

    var installations = [
        {
            title: 'Counterpoint',
            materials: 'Perforated Vinyl Window Installation',
            year: 2015,
            location: 'Los Angeles'
            images: [
                'http://www.julieoppermann.com/gallery/counterpoint11.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint12.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint_windowdetail.jpg',
                'http://www.julieoppermann.com/gallery/counterpoint_windowdetail2.jpg'
                ],
            onWebsite: true
        },
        {
            title: 'UDK Rundgang',
            materials: 'Colored Tape Installation on Floor',
            year: 2013,
            location: 'Berlin'
            images: [
                'http://www.julieoppermann.com/gallery/udk-floor1_700.jpg',
                'http://www.julieoppermann.com/gallery/udk-floor2_700.jpg'
                ],
            onWebsite: true
        },
        {
            title: 'Screen',
            materials: 'Acrylic Paint and Tape on Wall',
            year: 2012,
            location: 'Cologne'
            images: [
                'http://www.julieoppermann.com/gallery/floatingpanel.jpg'
                ],
            onWebsite: true
        },
         {
            title: 'Fold',
            materials: 'Acrylic and Spray Paint on Wall',
            year: 2012,
            location: 'FAAP, São Paulo'
            images: [
                'http://www.julieoppermann.com/gallery/fold.jpg'
                ],
            onWebsite: true
        },
         {
            title: 'Cube',
            materials: 'Acrylic Paint on Wall',
            year: 2012,
            location: 'FAAP, São Paulo'
            images: [
                'http://www.julieoppermann.com/gallery/cube.jpg'
                ],
            onWebsite: true
        },
        {
            title: 'Blue and Gold',
            materials: 'Acrylic Paint on Wall',
            year: 2011,
            location: 'New York'
            images: [
                'http://www.julieoppermann.com/gallery/moire1104a.jpg',
                'http://www.julieoppermann.com/gallery/moire1104b.jpg'
                ],
            onWebsite: true
        },
        {
            title: 'Reflection',
            materials: 'Acrylic Paint on Wall',
            year: 2011,
            location: 'New York'
            images: [
                'http://www.julieoppermann.com/gallery/wallfloor2.jpg',
                'http://www.julieoppermann.com/gallery/wallfloor1.jpg'
                ],
            onWebsite: true
        },
    ]
}

var seedVideos = function() {

    var videos = [
        {
            title: 'Untitled 01',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145822431'

        },
        {
            title: 'Untitled 02',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145817802'

        },
        {
            title: 'Untitled 03',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145822434'

        },
        {
            title: 'Untitled 04',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145817859'

        },
        {
            title: 'Untitled (2014)',
            year: 2014,
            onWebsite: true,
            video: 'https://vimeo.com/julieoppermann/untitled2014'

        },
    ]
}

var seedTexts = function() {

    var texts = [
        {
            source: 'Juxtapoz',
            title: 'In Conversation with Julie Oppermann',
            author: 'David Molesky',
            year: 2014,
            file: 'Oppermann_Juxtapoz_sm.pdf',
            onWebsite: true
        },
        {
            source: 'Art Rated',
            title: 'Artist Interview: Julie Oppermann',
            author: 'Sarah Elise Hall',
            year: 2013,
            file: 'Art-Rated_Oppermann_sm.pdf',
            onWebsite: true
        },
        {
            source: 'LA Times',
            title: 'Review: Julie Oppermann\'s paintings land with a gut punch',
            author: 'David Pagel',
            year: 2013,
            file: 'LA_Times_Oppermann.pdf',
            onWebsite: true
        },
        {
            source: 'FrontViews Temporary',
            title: 'Review: Tile',
            author: 'Charlotte Silbermann',
            year: 2014,
            file: 'silbermann_tile.pdf',
            onWebsite: true
        },
        {
            source: 'Night Under Light',
            title: 'Night Under Light',
            author: 'Alena Williams',
            year: 2014,
            file: 'Williams_Night_Under_Light.pdf',
            onWebsite: true
        },
        {
            source: 'Time Out São Paulo',
            title: 'Open Studio – Residencia Artistica FAAP',
            author: 'Claire Rigby',
            year: 2012,
            file: '2012March24_TimeOut.pdf',
            onWebsite: true
        }
    ]
}


connectToDb.then(function () {
    return Exhibitions.findAsync({}).then(function (exhibitions) {
        if (exhibitions.length === 0) {
             console.log('Seeding exhibitions')
            return seedExhibitions();
        } else {
            console.log(chalk.magenta('Seems to already be exhibition data, exiting!'));
            process.kill(0);
        }
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        // process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    })
})
.then(function(){
    return Paintings.findAsync({}).then(function (paintings){
        if (paintings.length === 0) {
            console.log('Seeding paintings')
            return seedPaintings();
        } else {
            console.log(chalk.magenta('Seems to already be painting data, exiting!'));
            process.kill(0);
        }
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        // process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    })

})
.then(function(){
    return WorksOnPaper.findAsync({}).then(function (wop){
        if (wop.length === 0) {
            console.log('Seeding works on paper')
            return seedWorksOnPaper();
        } else {
            console.log(chalk.magenta('Seems to already be wop data, exiting!'));
            process.kill(0);
        }
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        // process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    })

})
.then(function(){
    return Installations.findAsync({}).then(function (intallations){
        if (installations.length === 0) {
            console.log('Seeding installations')
            return seedInstallations();
        } else {
            console.log(chalk.magenta('Seems to already be installations data, exiting!'));
            process.kill(0);
        }
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        // process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    })

})
.then(function(){
    return Videos.findAsync({}).then(function (videos){
        if (videos.length === 0) {
            console.log('Seeding videos')
            return seedVideos();
        } else {
            console.log(chalk.magenta('Seems to already be videos data, exiting!'));
            process.kill(0);
        }
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        // process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    })

})
.then(function(){
    return Texts.findAsync({}).then(function (texts){
        if (videos.length === 0) {
            console.log('Seeding texts')
            return seedTexts();
        } else {
            console.log(chalk.magenta('Seems to already be texts data, exiting!'));
            process.kill(0);
        }
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    })

})
    

    

