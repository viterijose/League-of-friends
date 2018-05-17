var friendList = require('../data/friends.js');

module.exports = function(app){//exporting function that uses a parameter called 'app' which is an express function.

    app.get('/api/friends', function(req,res){
      res.json(friends);//return an array of friends
    });
}