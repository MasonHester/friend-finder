const questions = require("../data/questions.js");

module.exports = (app) => {
    app.get("/api/v1/questions", (req, res) => {
        res.json(questions)
    });
}