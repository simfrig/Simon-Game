let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;


$(document).keypress(function () {
            if (!started) {

                $("#level-title").text("Level " + level);
                nextSequence();
                started = true;
            }
        });

        // Record User's Clicked Pattern
        $(".btn").click(function () {
            let userChosenColour = $(this).attr("id");
            userClickedPattern.push(userChosenColour);
           
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswer(currentLevel);
        });

        //AI

        function nextSequence() {

            level++;
           
            $("#level-title").text("Level " + level);

            let randomNumber = Math.floor(Math.random() * 4);
            let randomChosenColour = buttonColours[randomNumber];
            gamePattern.push(randomChosenColour);
            
            $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);
            checkAnswer(currentLevel);
        };



        // Make Sound When User Click
        function playSound(name) {
            let audio = new Audio("sounds/" + name + ".mp3");
            audio.play();
        };

        //Animation to user click
        function animatePress(currentColour) {
            $("#" + currentColour).addClass("pressed");

            setTimeout(function () {
                $("#" + currentColour).removeClass("pressed");
            }, 100);
        };

        // Checking User Answer

        function checkAnswer(currentLevel){
            if (userClickedPattern == gamePattern) {
                nextSequence()
            } else {
                alert ("Lost");
            }

        };