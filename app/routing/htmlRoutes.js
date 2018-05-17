var path = require("path");

module.exports = function (app) {

    app.use("/", function (request, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    })

    app.get("/survey", function (request, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })

}

