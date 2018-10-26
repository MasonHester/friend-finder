const questions = require("../data/questions.js");
const users = require("../data/friends.js")

module.exports = (app) => {
    app.get("/api/v1/questions", (req, res) => {
        res.json(questions)
    });

    app.get("/api/v1/friends", (req, res) => {
        res.json(users);
    })
}