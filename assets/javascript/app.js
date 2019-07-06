// Define all the attributes of the survey object that we'll call upon in our functions
var surveyQuestions = [
    {
        question: "1. What color is the sky?",
        answers: ["Red", "Green", "Orange", "Blue"],
        correctAnswer: "Blue"
    },

    {
        question: "2. What shape is the earth?",
        answers: ["Square", "Round", "Triangle", "Flat"],
        correctAnswer: "Round"
    }

];
//---------------GAME SETUP---------------//

// Define all the global variables here that will run the game
// Always end stuff inside an object with a comma, instead of semicolon
// This is called a constructor
// Declare methods and properties in this survey object
var survey = {
    totalScore: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    questions: surveyQuestions,

    // Function that puts the questions on the page
    // When the page loads, the user will get a message that tells what the survey is about
    // When user clicks start button, questions will dynamically appear on the page
    // Loop through the answers and grab them dynamically through the array

    showQuestions: function () {
        for (i = 0; i < survey.questions.length; i++) {
            console.log(survey.questions[i]);


            // Show questions inside of survey and concatenate everything together
            // "." is how we open the next level and move through all the objects in our array
            $(".questions-text").append("<p><strong>" + survey.questions[i].question + "</strong></p>")
            for (j = 0; j < survey.questions[i].answers.length; j++) {
                // console.log("Current Question is : " + survey.questions[i]);
                // console.log("Current Option is : " + survey.questions[i]);
                $(".questions-text").append('<div id="option_' + i + '' + j + '"></div>');
                $(".questions-text").append("<p>" + survey.questions[i].answers[j] + "</p>")
                // We need to insert radio buttons next to each answer in the HTML from our JS document

                var radioBtn = $('<input type="radio" name="rbtnCount" />');
                radioBtn.appendTo('#option_' + i + '' + j);

                // <label class="custom-control-label" for="customRadioInline1">Red</label>
                //     < input type = "radio" id = "customRadioInline1" name = "customRadioInline1" class= "custom-control-input" > 
                
            }
        } console.log(survey.questions)
    }
}

//---------------START GAME---------------//

$("#submit").hide();
$(".scoreCounter").hide();
$("#start").on("click", function () {
    survey.showQuestions();
    $("#start").hide();
    $("#submit").show();
    $("#instructions-text").hide();
});