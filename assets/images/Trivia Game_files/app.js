// Trivia Questions
var questions = [{
        question: "What is Tommy's job?",
        options: ["Unemployed", "Firefighter", "Pimp", "Community Center Counselor"],
        answerIndex: 3,
        image
        // While it was a running gag that the other characters believed Tommy Strawn did not have a job,
        // there were clues throughout the series that Tommy was a counselor at a Boys & Girls Club.

},{

        question: "Which phrase did the Martin show popularize?",
        options: ["Talk to the hand", "Scary J. Blige", "Don't you know no good?", "You kill'n me smalls!"],
        answerIndex: 0,
        image
        // "Martin" is recognized for popularizing the phrase, "Talk to the hand."
},{

        question: "Which rapper did not appear on “Martin”?",
        options: ["The Notorious B.I.G", "MC Hammer", "Tupac", "Method Man"],
        answerIndex: 3,
        image
        // A number of hip-hop artists from the '90s. However, Tupac was not one of them.
},{
        question: "What city did “Martin” take place?",
        options: ["Atlanta", "Detroit", "Chicago", "Philadelphia"],
        answerIndex: 1,
        image
        // While "Martin" what filmed in Los Angeles, it took place in Detroit.
},{
        question: "Who did Martin pick on the most?",
        options: ["Gina", "Tommy", "Bruh Man", "Pam"],
        answerIndex: 3,
        image
},{
        question: "What floor did Bruh Man living on in the apartment complex?",
        options: ["2nd floor", "5th floor", "3rd floor", "1st floor"],
        answerIndex: 1,
        image
},{
        question: "Who sang at Martin and Gina’s engagement?",
        options: ["Brian McKnight", "Babyface", "Stevie Wonder", "Jodeci"],
        answerIndex: 0,
        image
},{
        question: "What is Gina’s father’s profession?",
        options: ["Judge", "Lawyer", "Chiropractor", "Family Physician"],
        answerIndex: 2,
        image
},{
        question: "Martin and Gina are rich. They have won the lottery or so they think. Martin gives gifts to all his friends. What does he give Pam?",
        options: ["A $2000 back shaving job", "A $2000 pedicure", "A $2000 plastic surgery job", "A $2000 wax job"],
        answerIndex: 3,
        image
},{
        question: "Martin went on a rent strike because his rent was increased and the landlord refused to fix any of the appliances around the apartment. How much was the increase?",
        options: ["10%", "5%", "$5.00", "$50.00"],
        answerIndex: 2,
        image
}];

var time = 0;
var timer = 20;
var currentQ = 0;
var rightAnswers;
var wrongAnswers;
var unanswered;
var userGuess;
var currentCorrectAnswer;


$(document).ready(function() {
    // on click of start button, start button disappears
    $("#startButton").on("click", function(){
        $(this).hide();
        console.log(this + " is startButton");
        newGame();
    });

    $("#resetButton").on("click", function(){
        $(this).hide();
        console.log(this + " is resetButton");
        newGame();
    });


    // ----------- Game Functions ------------
    function newGame(){
        currentQ = 0;
        // Scoreboard
        rightAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        $("#finalMessage").empty();
        $("#rightAnswers").empty();
        $("#wrongAnswers").empty();
        $("#unanswered").empty();
        loadQuestion();
    }

    // timer appears with 20 second countdown
    function countdown () {
        timer = 20;
        //timer countdown
        time = setInterval(showCountdown, 1000);

    }

    function showCountdown(){
        timer --;
        $("#timeLeft").html("<h3> Time Remaining: " + timer + "</h3>");
        if (timer < 1){
            unanswered++;
            $("#message").html("Dang, time ran out!")
            $("#timeLeft").empty();
            clearInterval(time);

            answerPrompt(isCorrect);
        }
    }

    function loadQuestion (){
        $("#message").empty();
        $("#correctAnswer").empty();
        $("#media").empty();
        currentCorrectAnswer = questions[currentQ].answerIndex;

                
        // # out of # questions remaining on html display
        $("#currentQ").html("Question " + (currentQ+1) + ' of ' + questions.length);
        // question displays on html, answers appear
        $(".question").html("<h2> " + questions[currentQ].question + "</h2>");
        // for loop to show the multiple choice answers
        for(var i = 0; i < 4; i++){
            var multipleChoices = $("<div>");
            multipleChoices.text(questions[currentQ].options[i]);
            multipleChoices.attr({"data-index": i });
            multipleChoices.addClass("thisChoice");
            //Displays the multiple choices
            $(".answerOption").append(multipleChoices);

        }

        countdown();
        //after making a selection to the answer, the answer page appears
        $(".thisChoice").on("click",function(){
            userGuess = $(this).data("index");
            console.log('currentCorrectAnswer: ', currentCorrectAnswer);
            console.log('userGuess: ', userGuess);
            if(currentCorrectAnswer === userGuess) {
                rightAnswers++;
                answerPrompt(true);
            } else {
                wrongAnswers++;
                answerPrompt(false);
            }

            clearInterval(time);
            // answerPrompt();
        });

    }

    function answerPrompt(isCorrect){
        clearInterval(time);
        $("#timeLeft").empty();
        // clear the question remaining string
        $("#currentQ").empty();
        // clear questions
        $(".question").empty();
        // clear multiple choices
        $(".thisChoice").empty();
        console.log('isCorrect: ', isCorrect);
        if (isCorrect === true) {
            //Display "You are correct" message
            $("#message").html("You right!");
            //gif or photo
        }
        else {
            //Display incorrect message
            $("#message").html("You wrong Home-slice!");
        }

        // wait 3 secs
        // setTimeout(  , 3000);
            // call other function to nextQ
    }



        // else {
        //     $("#message").html("You wrong Home-slice!");
        // }


        // show correct answer && gif, photo, sound

        // on click of answer, questions disappears

        // Check if the answer is correct or incorrect

        // if correct, display for 3 seconds congratulating message / show gif, photo, sound

        //correct ++;

        // if incorrect, display for 3 seconds that answer was incorrect.

        //incorrect ++;


        // if unanswered, display for 3 seconds that answer was incorrect.

        // incorrect ++;

        // loop remaining questions



        //final page -- scoreboard
            // correctAnswer: #
            // incorrectAnswer: #
            // unanswered: #
            // gif & sound

        function scoreboard (){
            $("#timeLeft").empty();
            $("#message").empty();
            $("#correctAnswer").empty();
            $("#media").empty();

            $('#finalMessage').html(messages.finished);
            $('#rightAnswers').html("Right Answers: " + rightAnswer);
            $('#wrongAnswers').html("Wrong Answers: " + wrongAnswer);
            $('#unanswered').html("Unanswered: " + unanswered);
            $('#resetButton').addClass('reset');
            $('#resetButton').show();
            $('#resetButton').html("You want to play again?");
        }
    });