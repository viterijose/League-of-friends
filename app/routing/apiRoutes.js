var friendList = require('../data/friends.js');

module.exports = function(app){//exporting function that uses a parameter called 'app' which is an express function.

    app.get('/api/friends', function(req,res){// /api/friends is a link found at the bottom of each page
      res.json(friends);//return an array of friends
    });

    app.post('/api/friends',function(req,res){

    });
}