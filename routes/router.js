var express = require('express');
var router = express.Router();
var fs = require("fs");
var jsonfile = require("jsonfile");

router.get('/', (req, res, next) => {
    res.render('main', {
        data: {
            title: 'DualityView'
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

var goToTour = function (req, res, next, tourname, scenes) {

    res.render('tour', {
        data: {
            title: 'Tour',
            tour: tourname,
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
    //TODO: get tourjson based on link clicked
	var tourjson = JSON.parse(fs.readFileSync("public/tours/tour1.json", 'utf8'));
    var tourname = "tour1"

    //get scenes programmatically: title and id
    var scenes = []
    var keys = Object.keys( tourjson.scenes );
    for( var i = 0,length = keys.length; i < length; i++ ) {
        scene = []
        scene.push(keys[i])
        scene.push(tourjson.scenes[ keys[ i ] ].title)
        scenes.push(scene)
    }
    
    goToTour(req, res, next, tourname, scenes) 
})



module.exports = router;
