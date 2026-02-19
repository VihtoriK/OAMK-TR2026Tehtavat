var express = require('express');
var router = express.Router();

// 5.
router.use(
    function(req,res,next){
        console.log('Tama on middleware!');
        next();
    }
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Tehtävät: */


// 1.
router.get('/tehtava/1',
    function(request,response){
        response.send('Tehtava 1 toimii!');
        console.log('Tehtava 1 toimii!');
    }
);

// 2.
router.get('/tehtava/2/:nimi',
    function(request,response){
        response.send('Tehtava 2 toimii! ja nimi on ' + request.params.nimi);
        console.log('Tehtava 2 toimii! ja nimi on ' + request.params.nimi);
    }
);

// 3.
router.get('/tehtava/3/:nimi/:ika',
    function(request,response){
        response.send('Tehtava 2 toimii! ja nimi on ' + request.params.nimi + ' ja ika on ' + request.params.ika);
        console.log('Tehtava 2 toimii! ja nimi on ' + request.params.nimi + ' ja ika on ' + request.params.ika);
    }
);
// Tai:
/*
router.get('/tehtava/3/:nimi:ika',
    function(request,response){
        response.send('Tehtava 2 toimii! ja nimi on ' + request.params.nimi + ' ja ika on ' + request.params.ika);
        console.log('Tehtava 2 toimii! ja nimi on ' + request.params.nimi + ' ja ika on ' + request.params.ika);
    }
);
*/


// 4.
router.post('/tehtava/4',
    function(request,response){
        response.send(request.body + 'Tehtava 4 POST!');
        console.log(request.body + 'Tehtava 4 POST!');
    }
);



module.exports = router;
