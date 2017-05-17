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
            title: 'Tour 1',
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
            //TODO: get scenes from json, pass it as props into sidebar, create links there with vue   
        }
    });    
}

router.get('/tour', (req, res, next) => {
    //build logic here that gets right json depending on user input and sends name json to frontend etc
	var tourjson = JSON.parse(fs.readFileSync("public/tours/tour1.json", 'utf8'));
    //get scenes programmaticallyu: title and id
    var scenes = [ ['hall', 'Hall' ] , ['living', 'Living Room'] , ['kitchen', 'Kitchen']  ]  
    var tourname = "tour1"

    goToTour(req, res, next, tourname, scenes) 
})



module.exports = router;
