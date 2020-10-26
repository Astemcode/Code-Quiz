
function start() {

    remainingTime = 70;
    document.getElementById("remainingTime").innerHTML = remainingTime;

    timer = setInterval(function() {
        remainingTime--;
        document.getElementById("remainingTime").innerHTML = remainingTime;
        //proceed to end the game function when timer is below 0 at any time
        if (remainingTime <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
}















var quizQuestion = document.getElementById("quizSection");
var possibleAnswers = document.getElementById("quizSection");
var answer;



function createQuestions() {
    questionOrder++;
    answer = quiz[questionOrder].answer

    quizQuestion.textContent = quiz[questionOrder].question;
    possibleAnswers.innerHTML = "";

    var options = quiz[questionOrder].options;

    for (var q = 0; q < options.length; q++) {
        var nextOption = document.createElement("button");

        nextOption.textContent = options[q]
        answerBtn = possibleAnswers.appendChild(nextOption).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}