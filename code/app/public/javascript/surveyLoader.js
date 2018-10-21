$(document).ready(() => {
    const loadAnswerDesc = () => {
        const answerDesc = ["Strongly Disagree", "Disagree", "No Opinion", "Agree", "Strongly Agree"];

        const $answerRow = $("<div>").addClass("row");

        answerDesc.forEach((description) => {
            const $answerCol = $("<div>").addClass("col s2");
            const $answerPar = $("<p>").text(description).addClass("quizDescription");

            switch(description) {
                case "Strongly Disagree":
                    $answerCol.addClass("offset-s1");
                    break;
            }

            $answerCol.append($answerPar);
            $answerRow.append($answerCol);
        });

        return $answerRow;
    }
    const loadRadioCircles = (index) => {
        const radioValues = [1,2,3,4,5];

        const $radioRow = $("<div>").addClass("row radioRow");
        
        radioValues.forEach((value) => {
            const $radioCol = $("<div>").addClass("col s2");
            const $label = $("<label>");
            const $inputRadio = $("<input>").addClass("radioCircle").attr("type", "radio").attr("name", index + 1).attr("value", value);
            const $span = $("<span>");

            switch(value) {
                case 1:
                    $radioCol.addClass("offset-s1");
                    break;
            }

            $label.append($inputRadio, $span);
            $radioCol.append($label);
            $radioRow.append($radioCol);
        });

        return $radioRow;
    }

    const loadQuestions = () => {
        $.get("/api/v1/questions").then((data) => {
            const $quiz = $("form.quiz");
            const $submitDiv = $("<div>").addClass("center-align");
            const $submit = $("<input>").addClass("center-align").attr("type", "submit").val("Submit");

            $submitDiv.append($submit);
    
            $.each(data.testQuestions, (index, value) => {
                const $spacer = $("<div>").addClass("spacer25px")
                const $mainRow = $("<div>").addClass("row");
                const $mainCol = $("<div>").addClass("col s8 offset-s2 question center-align");
                const $question = $("<p>").text(value).addClass("quizQuestion");
    
                $mainCol.append($question, loadRadioCircles(index), loadAnswerDesc());
                $mainRow.append($mainCol);
                $quiz.append($mainRow, $spacer);
            });
    
            $quiz.append($submitDiv);
        })
    }

    loadQuestions();
})