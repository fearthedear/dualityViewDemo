var express = require('express');
var router = express.Router();
var fs = require("fs");
var jsonfile = require("jsonfile");

//var tours = JSON.parse(fs.readFileSync("db/tours.json", 'utf8'));

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
	//create tour object as javascript
    res.render('tour1', {
        data: {
            title: 'Tour 1'
            //tour: "tours/tour1.json"
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

module.exports = router;
