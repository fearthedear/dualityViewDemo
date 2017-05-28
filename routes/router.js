var express = require('express');
var router = express.Router();
var fs = require("fs");
var jsonfile = require("jsonfile");
var path = require('path');

router.get('/', (req, res, next) => {
    //get tours available from files in folder
    tours = []
    tourfolder = path.join(__dirname, '../public/tours/jsons')
    fs.readdir(tourfolder, (err, files) => {
      files.forEach(file => {
        tours.push(file)
      });
    })

    res.render('main', {
        data: {
            title: 'DualityView',
            tours: tours
        },
        vue: {
            head: {
                title: 'DualityView',
                head: [
                    { property:'og:title', content: 'DualityView'},
                    { name:'twitter:title', content: 'DualityView'},
                ]
            }    
        }
    });
})

var goToTour = function (req, res, next, tourname, tourjson, scenes) {

    res.render('tour', {
        data: {
            title: 'Tour',
            tour: tourname,
            tourjson: tourjson,
            scenes: scenes
        },
        vue: {
            head: {
                title: 'DualityView',
                head: [
                    { property:'og:title', content: 'DualityView'},
                    { name:'twitter:title', content: 'DualityView'},
                ]
            },
            components: ['sidenav']
        }
    });    
}

router.get('/tour', (req, res, next) => {
    var name = req.query.name;
    var tourjson = JSON.parse(fs.readFileSync("public/tours/jsons/" + name, 'utf8'));
    var tourname = name;

    //get scenes programmatically: title and id
    var scenes = []
    var keys = Object.keys( tourjson.scenes );
    for( var i = 0,length = keys.length; i < length; i++ ) {
        scene = []
        scene.push(keys[i])
        scene.push(tourjson.scenes[ keys[ i ] ].title)
        scenes.push(scene)
    }
    
    goToTour(req, res, next, tourname, tourjson, scenes) 
})

module.exports = router;
