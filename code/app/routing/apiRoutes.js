const questions = require("../data/questions.js");
const users = require("../data/friends.js")

module.exports = (app) => {
    app.get("/api/v1/questions", (req, res) => {
        res.json(questions)
    });

    app.get("/api/v1/friends", (req, res) => {
        res.json(users);
    });

    app.post("/api/v1/friends", (req, res) => {
        const input = req.body
        if (Object.keys(input).length > 0) {
            console.log("in if")
            users.testUsers.push(input)
        }
        else {
            console.log("in else")
        }
        console.log(users);
    });
}