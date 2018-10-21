$(document).ready(() => {
    const incompleteQuiz = () => {
        console.log("IncompleteQuiz");
    }
    const checkAnswers = (event) => {
        event.preventDefault();

        const userInput = [];

        $.get("/api/v1/questions").then((data) => {
            const unansweredQuestions = {};

            $.each(data.testQuestions, (index, value) => {
                switch (isNaN(parseInt($(`[name=${index + 1}]:checked`).val()))) {
                    case true:
                        unansweredQuestions[index + 1] = value
                        break;
                    default:
                        userInput.push(parseInt($(`[name=${index + 1}]:checked`).val()));
                }
            });

            switch (Object.keys(unansweredQuestions).length) {
                case 0:
                    console.log(userInput)
                    break;
                default:
                    console.log(unansweredQuestions)
            }
        });
    }

    $("form").submit(checkAnswers);
});

