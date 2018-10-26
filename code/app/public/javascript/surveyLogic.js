$(document).ready(() => {
    const checkInput = () => {
        const $submitButton = $("input.submitQuiz")
        switch ($("input#userName").val()) {
            case "":
            $submitButton.attr("disabled", "disabled");
                break;
            default:
                $submitButton.removeAttr("disabled");
        }
    };
    
    const incompleteQuiz = (missedQuestions, objectLength) => {
        console.log(missedQuestions);

        const describerSpan = $("span.amountDescriber");
        const missingDisplayDiv = $("div.missingDisplayDiv")

        switch (true) {
            case objectLength > 1:
                describerSpan.text("these questions");
                break;
            default:
                describerSpan.text("this question");
        }

        $.each(missedQuestions, (key, value) => {
            $questionDiv = $("<div>").addClass("missingQuestionDiv");
            $keyPar = $("<p>").text(`${key}:`);
            $valuePar = $("<p>").text(`${value}`);
            $questionDiv.append($keyPar, $valuePar);
            missingDisplayDiv.append($questionDiv);
        });

        $("#incompleteQuizModal").modal("open");
    }

    const reduceArray = (arrayName) => {
        return arrayName.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)
    }

    const compareAnswers = (userInfo) => {
        $.get("/api/v1/friends").then((data) => {
            console.log(data);
            const reducedUserInfo = reduceScore()
        })
    }

    const checkAnswers = (event) => {
        event.preventDefault();

        userInfo = {
            name: "",
            img: "../images/placeholder.jpg",
            scores: []
        }

        console.log($("input#userName").val())

        $.get("/api/v1/questions").then((data) => {
            const unansweredQuestions = {};

            $.each(data.testQuestions, (index, value) => {
                switch (isNaN(parseInt($(`[name=${index + 1}]:checked`).val()))) {
                    case true:
                        unansweredQuestions[index + 1] = value;
                        break;
                    default:
                        userInfo.scores.push(parseInt($(`[name=${index + 1}]:checked`).val()));
                }
            });

            const objectLength = Object.keys(unansweredQuestions).length

            switch (objectLength) {
                case 0:
                    compareAnswers(userInfo);
                    break;
                default:
                    incompleteQuiz(unansweredQuestions, objectLength);
            }
        });
    }

    $("form").submit(checkAnswers);
    $("input#userName").keyup(checkInput);
});