// Define all the attributes of the survey object that we'll call upon in our functions
var surveyQuestions = [
    {
        question: "1.) The design for Pac-Man was originally inspired by a...",
        answers: ["Cheese wheel", "Pizza", "Pie chart", "Grapefruit"],
        correctAnswer: "Pizza"
    },
    {
        question: "2.) Which Nintendo game did Mario make his first appearance in?",
        answers: ["Donkey Kong", "Super Mario Bros.", "Balloon Fight", "Duck Hunt"],
        correctAnswer: "Donkey Kong"
    },
    {
        question: "3.) Who is the main protagonist in the \"Legend of Zelda\" series?",
        answers: ["Ganon", "Link", "Zelda", "Sheik"],
        correctAnswer: "Link"
    },
    {
        question: "4.) What was the first publicly released video game console ever made?",
        answers: ["Pong", "Atari 2600", "Magnavox Odyssey", "NES"],
        correctAnswer: "Magnavox Odyssey"
    },
    {
        question: "5.) What was the first FPS (first-person shooter) game to exist?",
        answers: ["Maze Wars", "Doom", "Halo", "Wolfenstein 3D"],
        correctAnswer: "Maze Wars"
    },
    {
        question: "6.) In the game \"Minecraft,\" this creature is known to explode when you get too close...",
        answers: ["Bob-omb", "Xploder", "Creeper", "Blasto"],
        correctAnswer: "Creeper"
    },
    {
        question: "7.) Which of these video game franchises have sold the most copies in the world?",
        answers: ["Super Mario", "Pokemon", "Call of Duty", "Grand Theft Auto"],
        correctAnswer: "Super Mario"
    },
    {
        question: "8.) What is the best-selling video game console of all time?",
        answers: ["Xbox 360", "Playstation 2", "Gameboy", "Nintedo Wii"],
        correctAnswer: "Playstation 2"
    }
];

//---------------GAME SETUP---------------//

// Define all the global variables here that will run the game
// Always end stuff inside an object with a comma, instead of semicolon
// (This is called a constructor)
// Declare methods and properties in this survey object
var survey = {
    totalScore: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    questions: surveyQuestions,

    // Need function that generates survey dynamically
    // Loop through the questions, answers, and correctAnswers and grab them through the array
    showSurvey: function () {

        for (i = 0; i < survey.questions.length; i++) {
            console.log(survey.questions[i]);

            // Display all objects inside of survey and concatenate questions, answers, and radio buttons together
            // ("." is how we open the next level and move through all the objects in our array)
            // (".append" inserts the specified content as the last child of each element)
            // (Generate HTML to the DOM dynamically through JS)
            $(".questions-text").append("<p><strong>" + survey.questions[i].question + "</strong></p>")

            // Now, we need to loop through all the answers
            // Declare new variable for user's choice to condense code
            for (j = 0; j < survey.questions[i].answers.length; j++) {
                var userChoices = survey.questions[i].answers[j];

                // Step 1. Create option div with a unique id for each question and answer
                $(".questions-text").append("<div id='option_" + i + j + "'></div>");

                // Step 2. Create a <p> element for answers text
                $(".questions-text").append("<p>" + userChoices + "</p>")

                // Step 3. Create radio button input and attach to parent div from Step 1. 
                // Insert bootstrap radio buttons in the #option div
                // (Id's are generated by looping through the object arrays)
                // TODO Changed this
                // var radioBtn = $('<input type="radio" name="' + userChoices + '" id="' + i + j + '"/>');
                var radioBtn = $('<input type="radio" style="float: left; margin-top: 3px; margin-right: 10px;" name="question_' + i + '" id="' + i + j + '" value="' + userChoices + '"/>');
                radioBtn.appendTo('#option_' + i + j);

                // BOOTSTRAP RADIO BUTTON
                // <label class="custom-control-label" for="customRadioInline1">Red</label>
                // <input type = "radio" id = "customRadioInline1" name = "customRadioInline1" class= "custom-control-input"> 

            }
        } console.log(survey.questions)
    }
}


//---------------TIMER---------------//

var timeleft = 30;
var downloadTimer = setInterval(function(){
  document.getElementById("timer-text").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    $("#submit").click()
    clearTimeout(timeleft)
  }
}, 1000);


//---------------START BUTTON---------------//

// Click start button to list questions and choices dynamically
$("#submit").hide();
$("#timer-text").hide();
$("#reset").hide();
$(".scoreCounter").hide();
$("#start").on("click", function () {
    survey.showSurvey();
    $("#start").hide();
    $("#submit").show();
    $("#timer-text").show();
    $("#instructions-text").hide();
});

//---------------SUBMIT BUTTON---------------//

$("#submit").on("click", function () {
    // Submit button has been clicked
    // Now...
    // Go through all the options and determine which radio button has been selected
    // Loop through the questions first (Same exact process before)
    for (i = 0; i < survey.questions.length; i++) {

        // Which option was selected for this particular question?
        var userChoice;
        for (j = 0; j < survey.questions[i].answers.length; j++) {

            // Create variable for function that recreates id's for "option_" div
            // (".is" checks the current matched set of elements against a selector, element, or jQuery object and returns true if at least one of these elements matches the given arguments)
            // (".attr" gets the value of an attribute for the first element in the set of matched elements)
            var choice = $("#" + i + j);
            if (choice.is(":checked")) {
                // TODO Changed this  
                // userChoice = choice.attr("name");
                userChoice = choice.val();
                console.log("You have selected: " + userChoice);
            }
        } // Computer knows what the user's choice is now

        // Check if user chose the right answer
        // (Need "i" to run through all questions in array to grab correctAnswer and see if elements match)
        if (userChoice == survey.questions[i].correctAnswer) {
            console.log("You have answered question " + i + " correctly!");
            survey.totalScore++;
        } else {
            // Do this if answer is incorrect
            console.log("You have answered question " + i + " incorrectly");
        }
    }

    // Tally up score for game stats
    console.log(survey.correctAnswers, survey.incorrectAnswers, survey.totalScore);
    // Manipulate HTML to reflect game stats
    $("#total-score-text").replaceWith(survey.totalScore + " / " + survey.questions.length);
    $(".scoreCounter").show();
    $("#reset").show();
    $(".questions-text").hide();
    $("#timer-text").hide();
    $("#submit").hide();
});

//---------------RESET BUTTON---------------//

$('#reset').on('click', function () {
    document.location.reload()
});