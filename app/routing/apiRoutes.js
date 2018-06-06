var friendList = require('../data/friends.js');

module.exports = function (app) {//exporting function that uses a parameter called 'app' which is an express function.

    app.get('/api/friends', function (req, res) {// /api/friends is a link found at the bottom of each page
        res.json(friendList);//return an array of friends
    });

    app.post('/api/friends', function (request, res) {
        var newFriendScores = request.body.scores;//value grabbed from survey taken by user constructor
        var scoresArray = [];//array for storing scores from current user
        var bestMatch = 0;//the best match for user will be the one with the least difference in scores

        //runs through all current friends in list
        for (var i = 0; i < friendList.length; i++) {//runs through the friendlist array
            var scoresDiff = 0;
           
            for (var j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));//algorithm for checking match
            }
            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //return bestMatch data
        var bff = friendList[bestMatch];
        res.json(bff);//send best match back to client

        //pushes new submission into the friendsList array
        friendList.push(request.body);
    });
}