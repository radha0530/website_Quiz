const questions = [
    

    {
        question: "What should be the very last thing in an HTML document?",
        optionA: "heading",
        optionB:"Title",
        optionC:"Body",
        optionD:"Doc type",
        correctOption: "optionD"
    },

    {
        question: "What are the two methods of forms transfer?",
        optionA: "get and recieve",
        optionB: "get and post",
        optionC: "post and swap",
        optionD: "post and recive",
        correctOption: "optionB"
    },

    {
        question: "How many ways can you apply colors in CSS?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "4",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is an instruction to the web browser about what version of the markup language the page is written in?",
        optionA: "mark up",
        optionB: "meta tag",
        optionC: "Doctype",
        optionD: "title",
        correctOption: "optionc"
    },

    {
        question: "What would be the result of 9+6+”3”?",
        optionA: "18",
        optionB: "963",
        optionC: "undefined",
        optionD: "153",
        correctOption: "optionD"
    },

    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        optionA: "HTML,HEAD,BODY,TITLE",
        optionB: "Html,head,title,body",
        optionC: "head,title,html,body",
        optionD: "there is no pattern",
        correctOption: "optionB"
    },

    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        optionA: "<b>",
        optionB: "<strong>",
        optionC: "<a>",
        optionD: "<bold>",
        correctOption: "optionA"
    },

    {
        question: "Which of the following tag is used to embed css in html page?",
        optionA: "<css>",
        optionB: "<!Doctype>",
        optionC: "<script>",
        optionD: "<style>",
        correctOption: "optionD"
    },

    {
        question: "Which of the following CSS selectors are used to specify a group of elements?",
        optionA: "tag",
        optionB: "id",
        optionC: "class",
        optionD: "both a & d",
        correctOption: "optionC"
    },

    {
        question: "Which of the following CSS framework is used to create a responsive design",
        optionA: "bootstrap",
        optionB: "php",
        optionC: "laravel",
        optionD: "JavaScript",
        correctOption: "optionA"
    },

    {
        question: " Which of the following CSS Property sets the stacking order of positioned elements?",
        optionA: "z-index",
        optionB: "i-index",
        optionC: "x-index",
        optionD: "y-index",
        correctOption: "optionA"
    },


    {
        question: "How many heading sizes in html",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        optionD: "7",
        correctOption: "optionC"
    },

    {
        question: "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        optionA: "php",
        optionB: "JavaScript",
        optionC: "Html",
        optionD: "CSS",
        correctOption: "optionD"
    },

    {
        question: " Which one of the following also known as Conditional Expression:",
        optionA: " Switch statement ",
        optionB: "If-then-else statement",
        optionC: "immediate if",
        optionD: "none of these",
        correctOption: "optionC"
    },

    {
        question: "The 'function' and 'var' are known as:",
        optionA: "keywords",
        optionB: "data type",
        optionC: "declaration",
        optionD: "prototype",
        correctOption: "optionC"
    },

    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        optionA: "Global variable",
        optionB: "Local element",
        optionC: "bothe of these",
        optionD: "none of these",
        correctOption: "optionB"
    },

    {
        question: "Front End is______",
        optionA: "Server side",
        optionB: "Client side",
        optionC: "both of these",
        optionD: "none of these",
        correctOption: "optionB"
    },

    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        optionA: "method",
        optionB: "trigering event",
        optionC: "function",
        optionD: "both A&C",
        correctOption: "optionD"
    },

    {
        question: "n the JavaScript, which one of the following is not considered as an error",
        optionA: "spelling mistake",
        optionB: "mising semicoloun",
        optionC: "divisible by zero",
        optionD: "missing bracket",
        correctOption: "optionC"
    },

    {
        question: "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
        optionA: "if(a!==null)",
        optionB: "if (a!)",
        optionC: "if(a!null)",
        optionD: " if(a!=null)",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following is an ternary operator:",
        optionA: "?",
        optionB: "+",
        optionC: "=",
        optionD: "*",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not:",
        optionA: "===",
        optionB: "==",
        optionC: "=",
        optionD: "=&=",
        correctOption: "optionB"
    },

    {
        question: "jQuery is a -",
        optionA: "JavaScript library",
        optionB: "JavaScript method",
        optionC: "Ajax",
        optionD: "PHP library",
        correctOption: "optionA"
    },

    {
        question: "Which of the following sign is used as a shortcut for jQuery?",
        optionA: "$",
        optionB: "%",
        optionC: "&",
        optionD: "%",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
    
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}