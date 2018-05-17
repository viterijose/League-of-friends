var path = require("path");

module.exports = function (app) {//exporting function that uses a parameter called 'app' which is an express function.

    app.get("/survey", function (request, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));//setting routing for survey
    })
    app.use("/", function (request, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));//setting routing for home
    })
}


