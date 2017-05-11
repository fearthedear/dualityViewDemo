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

router.get('/tour1', (req, res, next) => {
    //get tour json
	var tour1 = JSON.parse(fs.readFileSync("public/tours/tour1.json", 'utf8'));

    res.render('tour1', {
        data: {
            title: 'Tour 1'
            //tour: "tour1"
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
})

module.exports = router;
