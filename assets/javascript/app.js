// Trivia Questions
var questions = [{
        question: "What is Tommy's job?",
        options: ["Unemployed", "Firefighter", "Pimp", "Community Center Counselor"],
        answerIndex: 3
        // While it was a running gag that the other characters believed Tommy Strawn did not have a job,
        // there were clues throughout the series that Tommy was a counselor at a Boys & Girls Club.

},{

        question: "Which phrase did the Martin show popularize?",
        options: ["Talk to the hand", "Scary J. Blige", "Don't you know no good?", "You kill'n me smalls!"],
        answerIndex: 0
        // "Martin" is recognized for popularizing the phrase, "Talk to the hand."
},{

        question: "Which rapper did not appear on “Martin”?",
        options: ["The Notorious B.I.G", "MC Hammer", "Tupac", "Method Man"],
        answerIndex: 3
        // A number of hip-hop artists from the '90s. However, Tupac was not one of them.
},{
        question: "What city did “Martin” take place?",
        options: ["Atlanta", "Detroit", "Chicago", "Philadelphia"],
        answerIndex: 1
        // While "Martin" what filmed in Los Angeles, it took place in Detroit.
},{
        question: "Who did Martin pick on the most?",
        options: ["Gina", "Tommy", "Bruh Man", "Pam"],
        answerIndex: 3
},{
        question: "What floor did Bruh Man living on in the apartment complex?",
        options: ["2nd floor", "5th floor", "3rd floor", "1st floor"],
        answerIndex: 1
},{
        question: "Who sang at Martin and Gina’s engagement?",
        options: ["Brian McKnight", "Babyface", "Stevie Wonder", "Jodeci"],
        answerIndex: 0
},{
        question: "What is Gina’s father’s profession?",
        options: ["Judge", "Lawyer", "Chiropractor", "Family Physician"],
        answerIndex: 2
},{
        question: "Martin and Gina are rich. They have won the lottery or so they think. Martin gives gifts to all his friends. What does he give Pam?",
        options: ["A $2000 back shaving job", "A $2000 pedicure", "A $2000 plastic surgery job", "A $2000 wax job"],
        answerIndex: 3
},{
        question: "Martin went on a rent strike because his rent was increased and the landlord refused to fix any of the appliances around the apartment. How much was the increase?",
        options: ["10%", "5%", "$5.00", "$50.00"],
        answerIndex: 2
}];

//After message prompt
var messagePrompt = {
    correct: "You right!",
    incorrect: "You wrong Homes!",
    timeExpired: "Time ran out!",
    gameFinished:"How did you do."
}


var time = 0;
var timer = 20;
var second = 0;
var currentQ = 0;
var rightAnswer = 0;
var wrongAnswer = 0;
var answer = 0;
var unanswered = 0;
var userSelect= 0;


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
        correctAnswer = 0;
        wrongAnswer = 0;
        unanswered = 0;
        $("#finalMessage").empty();
        $("#rightAnswers").empty();
        $("#wrongAnswers").empty();
        $("#unanswered").empty();
        loadQuestion();
    }

    function loadQuestion (){
        $("#message").empty();
        $("#correctAnswer").empty();
        $("#media").empty();
        answer = true;

        // displays which question out of 10 you are on
        $("#currentQ").html("Question " + (currentQ+1) + ' of ' + questions.length);
        // displays the current question
        $(".question").html("<h2> " + questions[currentQ].question + "</h2>");
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
            userSelect = $(this).data("index");
            clearInterval(time);
        });

    }



    // timer appears with 20 second countdown
    function countdown () {
        timer = 20;
        $("#timeLeft").html("<h3>Time Remaining: " + timer + "</h3>");
        answer = true;

        //timer countdown
        time = setInterval(showCountdown, 1000);
    }

    function showCountdown(){
        timer --;
        $("#timeLeft").html("<h3> Time Remaining: " + timer + "</h3>");
        if (timer < 1){
            clearInterval(time);
            answer = false;
            answerPrompt();
        }
    }






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
            $('#resetButton').html('Start Over?');
        }





    });








    // # out of # questions remaining on html display

    // question displays on html, answers appear

    // on click of answer, questions disappears

    // Check if the answer is correct or incorrect

    // if correct, display for 3 seconds congratulating message / show gif, photo, sound

    //correct ++;

    // if incorrect, display for 3 seconds that answer was incorrect.

    //incorrect ++;

    // show correct answer && gif, photo, sound

    // if unanswered, display for 3 seconds that answer was incorrect.

    // incorrect ++;

    // loop remaining questions


