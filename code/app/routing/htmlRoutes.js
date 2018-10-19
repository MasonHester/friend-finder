const path = require("path");

module.exports = (app) => {
    app.get("/quiz", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/survey.html"));
    });

    app.get("/survey", (req, res) => {
        res.redirect("/quiz");
    })

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/home.html"));
    });

    app.get("*", (req, res) => {
        res.redirect("/");
    })
};