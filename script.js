var quiz = [
    {question:"What does DOM stand for in JavaScript?",
    options:["Dissolved Organic Matter", "Department of Management", "Document Object Model", "Dirty Old Man"],
    answer: "Document Object Model"
},

{question:"Which framework is designed for creating dynamic websites?",
    options:["Static Frameworks", "Responsive Frameworks", "Constant Frameworks", "Contemporary Frameworks"],
    answer: "Responsive Frameworks"
},

{question:"What is the index position of the third character in a string?",
    options:["Index [5]", "Index [1]", "Index [2]", "Index [3]"],
    answer: "Index [2]"
},

{question:"True or False you can declare a function inside of a function?",
    options:["False", "True", "Man I Dont Know", "Both answers are correct"],
    answer: "True"
},

{question:"Which of the following is NOT a variable?",
    options:["String", "Number", "Media", "Boolean"],
    answer: "Media"
},

{question:"Which is NOT a JavaScript library?",
    options:["Mootools", "jQuery", "React", "Atom"],
    answer: "Atom"
}

] 

var score = 0;
var currentQuestion = 0;
var remainingTime = 30;
var timer;


// Start timer and activate Quiz 
function start() {

    document.getElementById("remainingTime").innerHTML = remainingTime;

    timer = setInterval(function() {
        remainingTime--;
        document.getElementById("remainingTime").innerHTML = remainingTime;

        // Game ends
        if (remainingTime <= 0) {
            clearInterval(timer);
            gameOver(); 
        }
    }, 1000);

    renderQuestion();
}

// Answer Choice Time Adjustment
function correct () {
    remainingTime += 1;
    score +=15
    next()
}
function incorrect () {
    remainingTime -= 8;
    next()
}

// Question Loop
function renderQuestion(){
    var quizZone = "<h2>" + quiz[currentQuestion].question + "</h2>"
    for (var buttonLoop = 0; buttonLoop < quiz[currentQuestion].options.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", quiz[currentQuestion].options[buttonLoop]);
        if (quiz[currentQuestion].options[buttonLoop] == quiz[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizZone += buttonCode
    }
    document.getElementById("quizSection").innerHTML = quizZone;
}

function next() {
    currentQuestion++;
    console.log(currentQuestion)
    if (currentQuestion === quiz.length) {
        console.log(currentQuestion)
        gameOver();
    } else {
        renderQuestion()
    }
}

// Completion of Game 
function gameOver() {
    clearInterval(timer);

    var quizResults = `
    <h2>Aww Your Time is Up!!!</h2>
    <h5>You've made it to the end patron, hope you're not feeling to overwhelmed by the quiz.<h5>
    <h3>Nice score of ` + score +  ` /100!</h3>
    <h3>Hmm with  a score of ` + score  +  ` there's always room for improvement!</h3>
    <input type="text" id="name" placeholder="Patron's Alias"> 
    <button onclick="topMarks()">Submit</button>`;

    document.getElementById("quizSection").innerHTML = quizResults;
}


// Recording of Score 
function topMarks(){

    var highScore  = JSON.parse(localStorage.getItem("highScore") || "[]"),
    scoreArchive = document.getElementById("top-scores");
    name = document.getElementById("name").value.trim();
    console.log(name)

    var newScore = {
        score: score,
        name: name,
    }
    highScore.push(newScore)
    

    // sort scores from high to low
    highScore.sort(function (a,b){
        return b.score - a.score
    })

    localStorage.setItem("highScore",JSON.stringify(highScore))

    // display the scores
    for (var s = 0; s < highScore.length; s++) {
        var listScores = document.createElement("li")
        listScores.textContent = highScore[s].name + " - " + highScore[s].score
        scoreArchive.appendChild(listScores)
    }
}

    var homeBtn = document.querySelector("button.homeBtn"),
        resetBtn = document.querySelector("button.resetBtn")

// click handlers for restart and clearing scoreboard
// resetBtn.addEventListener("click", function () {
//     localStorage.clear();
//     history.back()
// });
// homeBtn.addEventListener("click", function () {
//     history.back();
// });

