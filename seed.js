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
        {   key: 'counterpointExhibition',
            order: 1,
            title: 'Counterpoint',
            gallery: 'Mark Moore Gallery',
            type: 'Solo',
            dates: 'February 19 - March 21, ',
            year: 2015,
            location: 'Los Angeles, CA',
            images: [
                'counterpoint1.jpg',
                'counterpoint2.jpg',
                'counterpoint3.jpg',
                'counterpoint4.jpg',
                'counterpoint5.jpg',
                'counterpoint6.jpg',
                'counterpoint7.jpg',
                'counterpoint8.jpg',
                'counterpoint9.jpg',
                'counterpoint10.jpg'
                ],
            onWebsite: true
        },
        {   key: 'rasterExhibition',
            order: 2,
            title: 'Raster',
            gallery: 'Galerie Roepke',
            type: 'Solo',
            dates: 'October 17 - November 22, ',
            year: 2014,
            location: 'Cologne, Germany',
            images: [
                'raster1.jpg',
                'raster2.jpg',
                'raster3.jpg',
                'raster4.jpg',
                'raster5.jpg',
                'raster6.jpg',
                'raster7.jpg',
                'raster8.jpg',
                'raster9.jpg',
                'raster10.jpg',
                'PR_raster.jpg'
            ],
            onWebsite: true
        },
        {
            key: 'palinopsiaExhibition',
            order: 3,
            title: 'Palinopsia',
            gallery: 'Joshua Liner Gallery',
            type: 'Solo',
            dates: 'February 27 - March 29, ',
            year: 2014,
            location: 'New York, NY',
            images: [
                'palinopsia01.jpg',
                'palinopsia02.jpg',
                'palinopsia03.jpg',
                'palinopsia04.jpg',
                'palinopsia05.jpg'
            ],
            onWebsite: true
        },
        {
            key: 'projectRoomExhibition',
            order: 4,
            title: 'Project Room',
            gallery: 'Mark Moore Gallery',
            type: 'Solo',
            dates: 'July 27 - September 7, ',
            year: 2013,
            location: 'Los Angeles, CA',
            images: [
                'projectroom01.jpg',
                'projectroom02.jpg',
                'projectroom03.jpg',
                'projectroom04.jpg',
                'projectroom05.jpg'
            ],
            onWebsite: true
        },
        {
            key: 'Roepke2012',
            order: 5,
            title: 'Julie Oppermann',
            gallery: 'Galerie Roepke',
            type: 'Solo',
            dates: 'September 7 - October 12, ',
            year: 2012,
            location: 'Cologne, Germany',
            images: [
                'roepke1.jpg',
                'roepke2.jpg',
                'roepke3.jpg',
                'roepke4.jpg',
                'roepke5.jpg',
                'roepke6.jpg',
                'PR_roepke.jpg'
            ],
            onWebsite: true
        },
        {
            key: 'MFAthesis',
            order: 6,
            title: 'MFA Thesis',
            gallery: 'Hunter College Times Square Gallery',
            type: 'Solo',
            dates: 'December 12, 2012 - January 16, ',
            year: 2013,
            location: 'New York, NY',
            images: [
                'thesis_install1.jpg',
                'thesis_install2.jpg'
                ],
            onWebsite: true
        },
        {
            title: 'Tile',
            gallery: 'FrontViews Temporary at Kunstquartier Bethanien',
            type: 'Group',
            artists: ['Astali / Peirce', 'Andreas Helfer', 'Nathan Hylden', 'Henry Kleine', 'Roman Liska', 'Julie Oppermann', 'Hannu Prinz', 'Michael Rockel', 'Elmar Vestner', 'Johannes Weiss', 'Michaela Zimmer'],
            dates: 'September 17 - September 21, ',
            year: 2014,
            location: 'Berlin, Germany',
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
            onWebsite: false
        },
        {
            title: 'Suckstract2',
            gallery: 'Städtische Galerie Remscheid',
            type: 'Group',
            artists: ['Ralf Dereich', 'Dani Jakob', 'Shila Khatami', 'Henry Kleine', 'Daniel Lergon', 'Julie Oppermann', 'Max Schulze', 'Anja Schwörer', 'Gabriel Vormstein','Michaela Zimmer'],
            dates: 'June 15 - August 31, ',
            year: 2014,
            location: 'Remscheid',
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
            onWebsite: false
        },
         {
            key: 'derGrund',
            title: 'Der Grund ist nicht Licht sondern Nacht',
            gallery: 'Galerie Christian Ehrentraut',
            type: 'Solo',
            artists: ['Julie Oppermann, Yorgos Stamkopoulos & Alexander Wolff, '],
            dates: 'April 30 - June 7, ',
            year: 2014,
            location: 'Berlin, Germany',
            images: [
                'ehrentraut01.jpg',
                'dmk_m2-4.jpg',
                'ehrentraut02.jpg',
                'ehrentraut03.jpg',
                'ehrentraut04.jpg',
                'ehrentraut05.jpg',
                'ehrentraut06.jpg',
                'ehrentraut07.jpg',
                'Williams_Night_Under_Light.jpg'
            ],
            onWebsite: false
        },
        {
            title: 'Suckstract',
            gallery: 'Projektraum Bethanien',
            type: 'Group',
            artists: ['Ralf Dereich', 'Dani Jakob', 'Shila Khatami', 'Henry Kleine', 'Daniel Lergon', 'Julie Oppermann', 'Max Schulze', 'Anja Schwörer', 'Gabriel Vormstein','Michaela Zimmer'],
            dates: 'September 20 - September 22, ',
            year: 2013,
            location: 'Berlin, Germany',
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
            onWebsite: false
        }

    ];
    return Exhibitions.createAsync(exhibitions);

};

var seedPaintings = function() {

    var paintings = [
        {
            title: '1501',
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'counter-point',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'screen',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'raster-',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'screen',
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
            series: 'glitch',
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
            series: 'glitch',
            materials: 'Acrylic on Canvas',
            scale: 'Large',
            dimensions: [210, 190],
            unit: 'cm',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/1214.jpg',
            onWebsite: true
        },
            {
            title: '1215-Triptych',
            series: 'glitch',
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
            series: 'glitch',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'glitch',
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
            series: 'glitch',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'moiré',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'aluminum-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
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
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s03.jpg',
            onWebsite: true
        },
        {
            title: 'dmks04',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s04.jpg',
            onWebsite: true
        },
        {
            title: 'dmks05',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s05.jpg',
            onWebsite: true
        },
        {
            title: 'dmks06',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s06.jpg',
            onWebsite: true
        },
        {
            title: 'dmks07',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s07.jpg',
            onWebsite: true
        },
        {
            title: 'dmks08',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s08.jpg',
            onWebsite: true
        },
        {
            title: 'dmks09',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_s09.jpg',
            onWebsite: true
        },
        {
            title: 'dmk1401',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1401.jpg',
            onWebsite: true
        },
        {
            title: 'dmk1402',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1402.jpg',
            onWebsite: true
        },
        {
            title: 'dmk1403',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1403.jpg',
            onWebsite: true
        },
        {
            title: 'dmk1404',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1404.jpg',
            onWebsite: true
        },
        {
            title: 'dmk1405',
            series: 'wood-panels',
            materials: 'Acrylic on Wood Panel',
            scale: 'Small',
            dimensions: [60, 50],
            unit: 'cm',
            year: 2014,
            image: 'http://julieoppermann.com/gallery/dmk_1405.jpg',
            onWebsite: true
        }

    ];

    return Paintings.createAsync(paintings);
}

var seedWorksOnPaper = function() {

    var worksonpaper = [
        {
            title: 'wp1303',
            series: 'Works-On-Paper',
            category: 'Painting',
            materials: 'Acrylic and checked tape on paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2013,
            image: 'http://www.julieoppermann.com/gallery/wp1303_700.jpg',
            onWebsite: true
        },
        {
            title: 'wp1403',
            series: 'Works-On-Paper',
            category: 'Painting',
            materials: 'Spray paint on Yupo Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/wp1403.jpg',
            onWebsite: true
        },
        {
            title: 'wp1402',
            series: 'Works-On-Paper',
            category: 'Painting',
            materials: 'Spray Paint on Yupo Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2014,
            image: 'http://www.julieoppermann.com/gallery/wp1402.jpg',
            onWebsite: true
        },
         {
            title: 'wp1222',
            series: 'Works-On-Paper',
            category: 'Painting',
            materials: 'Acrylic and Spray Paint on Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/wp1222.jpg',
            onWebsite: true
        },
         {
            title: 'ypf01',
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
            title: 'ypf02',
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
            title: 'ypf03',
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
            title: 'ypf04',
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
            title: 'ypsp01',
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
            title: 'ypsp02',
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
            title: 'ypsp03',
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
            title: 'ypsp04',
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
            title: 'ypsp05',
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
            title: 'ypsp07',
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
            title: 'ypsp08',
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
            title: 'bpp-blue',
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
            title: 'bpp-green',
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
            title: 'bpp-grey',
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
            title: 'bpp-pink-grey',
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
            title: 'wpp-noise-1',
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
            title: 'wpp-noise-2',
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
            title: 'wpp-red',
            series: 'Etchings',
            category: 'Etching',
            materials: 'Etching Monotype on Paper',
            dimensions: [00, 00],
            unit: 'in',
            year: 2012,
            image: 'http://www.julieoppermann.com/gallery/wpp-red.jpg',
            onWebsite: true
        }

    ];
    return WorksOnPaper.createAsync(worksonpaper);
}

var seedInstallations = function() {

    var installations = [
        {
            key: 'counterpointWindows',
            title: 'Counterpoint',
            materials: 'Perforated Vinyl Window Installation',
            year: 2015,
            location: 'Los Angeles, CA',
            images: [
                'counterpoint11.jpg',
                'counterpoint12.jpg',
                'counterpoint_windowdetail.jpg',
                'counterpoint_windowdetail2.jpg'
                ],
            onWebsite: true
        },
        {   key: 'UDKRundgang',
            title: 'UDK Rundgang',
            materials: 'Colored Tape Installation on Floor',
            year: 2013,
            location: 'Berlin, Germany',
            images: [
                'udk-floor1_700.jpg',
                'udk-floor2_700.jpg'
                ],
            onWebsite: true
        },
        {
            key: 'screening',
            title: 'Screening',
            materials: 'Acrylic Paint and Tape on Wall',
            year: 2012,
            location: 'Cologne, Germany',
            images: [
                'floatingpanel.jpg'
                ],
            onWebsite: true
        },
         {
            key: 'fold',
            title: 'Fold',
            materials: 'Acrylic and Spray Paint on Wall',
            year: 2012,
            location: 'FAAP, São Paulo, Brazil',
            images: [
                'fold.jpg'
                ],
            onWebsite: true
        },
         {
            key: 'cube',
            title: 'Cube',
            materials: 'Acrylic Paint on Wall',
            year: 2012,
            location: 'FAAP, São Paulo, Brazil',
            images: [
                'cube.jpg'
                ],
            onWebsite: true
        },
        {
            key: 'bluegold',
            title: 'Blue and Gold',
            materials: 'Acrylic Paint on Wall',
            year: 2011,
            location: 'New York, NY',
            images: [
                'moire1104a.jpg',
                'moire1104b.jpg'
                ],
            onWebsite: true
        },
        {
            key: 'reflection',
            title: 'Reflection',
            materials: 'Acrylic Paint on Wall',
            year: 2011,
            location: 'New York, NY',
            images: [
                'wallfloor2.jpg',
                'wallfloor1.jpg'
                ],
            onWebsite: true
        }
    ];
    return Installations.createAsync(installations);
}

var seedVideos = function() {

    var videos = [
        {
            title: 'Untitled-01',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145822431'

        },
        {
            title: 'Untitled-02',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145817802'

        },
        {
            title: 'Untitled-03',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145822434'

        },
        {
            title: 'Untitled-04',
            year: 2015,
            onWebsite: true,
            video: 'https://vimeo.com/145817859'

        },
        {
            title: 'Untitled-2014',
            year: 2014,
            onWebsite: true,
            video: 'https://vimeo.com/julieoppermann/untitled2014'

        }
    ];
    return Videos.createAsync(videos);
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
            source: 'Art-Rated',
            title: 'Artist Interview: Julie Oppermann',
            author: 'Sarah Elise Hall',
            year: 2013,
            file: 'Art-Rated_Oppermann_sm.pdf',
            onWebsite: true
        },
        {
            source: 'LA-Times',
            title: 'Review: Julie Oppermann\'s paintings land with a gut punch',
            author: 'David Pagel',
            year: 2013,
            file: 'LA_Times_Oppermann.pdf',
            onWebsite: true
        },
        {
            source: 'FrontViews-Temporary',
            title: 'Review: Tile',
            author: 'Charlotte Silbermann',
            year: 2014,
            file: 'silbermann_tile.pdf',
            onWebsite: true
        },
        {
            source: 'Night-Under-Light',
            title: 'Night Under Light',
            author: 'Alena Williams',
            year: 2014,
            file: 'Williams_Night_Under_Light.pdf',
            onWebsite: true
        },
        {
            source: 'Time-Out-São-Paulo',
            title: 'Open Studio – Residencia Artistica FAAP',
            author: 'Claire Rigby',
            year: 2012,
            file: '2012March24_TimeOut.pdf',
            onWebsite: true
        }
    ];
    return Texts.createAsync(texts);
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
// .then(function(){
//     return Paintings.findAsync({}).then(function (paintings){
//         if (paintings.length === 0) {
//             console.log('Seeding paintings')
//             return seedPaintings();
//         } else {
//             console.log(chalk.magenta('Seems to already be painting data, exiting!'));
//             process.kill(0);
//         }
//     })
//     .then(function () {
//         console.log(chalk.green('Seed successful!'));
//         // process.kill(0);
//     }).catch(function (err) {
//         console.error(err);
//         process.kill(1);
//     })

// })
// .then(function(){
//     return WorksOnPaper.findAsync({}).then(function (wop){
//         if (wop.length === 0) {
//             console.log('Seeding works on paper')
//             return seedWorksOnPaper();
//         } else {
//             console.log(chalk.magenta('Seems to already be wop data, exiting!'));
//             process.kill(0);
//         }
//     })
//     .then(function () {
//         console.log(chalk.green('Seed successful!'));
//         // process.kill(0);
//     }).catch(function (err) {
//         console.error(err);
//         process.kill(1);
//     })

// })
.then(function(){
    return Installations.findAsync({}).then(function (installations){
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
        if (texts.length === 0) {
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




