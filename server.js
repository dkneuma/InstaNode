/**
 * Created by daniel.neumann on 5/24/16.
 */
// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
// CONFIGURE THE APP
// configure instagram app with client_id
ig.use({
    client_id: 'd31786d346634699a0d497010fb04721',
    client_secret: 'd7344a9ca01e4e67bfd250d6a2748214'
});

// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// configure instagram app with client-id
// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - popular images
app.get('/', function(req, res) {
// use the instagram package to get popular media
// use the instagram package to get popular media
    ig.media_popular(function(err, medias, remaining, limit) {
// render the home page and pass in the popular images
        res.render('pages/index', { grams: medias });
    });
});
// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');