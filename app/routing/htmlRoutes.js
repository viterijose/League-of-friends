var path = require("path");

var htmlRoutes = function() {
    this.home = function () {
        app.get("/", function (request, res) {
            res.sendFile(path.join(__dirname, "/../public/home.html"));
        })
    },

        this.survey = function () {
            app.get("/survey", function (request, res) {
                res.sendFile(path.join(__dirname, "./public/survey.html"));
            })
        }
}

module.exports = htmlRoutes;