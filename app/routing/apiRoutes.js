var friendList = require('../data/friends.js');

module.exports = function (app) {//exporting function that uses a parameter called 'app' which is an express function.

    app.get('/api/friends', function (req, res) {// /api/friends is a link found at the bottom of each page
        res.json(friendList);//return an array of friends
    });

    app.post('/api/friends', function (request, res) {
        var newFriendScores = request.body.scores;//value grabbed from friends.js constructor
        var scoresArray = [];//arrau for storing scores from current user
        // var friendCount = 0;
        var bestMatch = 0;

        //runs through all current friends in list
        for (var i = 0; i < friendList.length; i++) {//runs through the friendlist array
            var scoresDiff = 0;
            //run through scores to compare friends
            for (var j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));//algorith for checking match
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
        res.json(bff);

        //pushes new submission into the friendsList array
        friendList.push(request.body);
    });
}