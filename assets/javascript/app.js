var surveyQuestions = [
    {question: "1. What color is the sky?",
    answers: ["Red", "Green", "Orange", "Blue"],
    correctAnswer: "Blue"},

    {question: "2. What shape is the earth?",
    answers: ["Square", "Round", "Triangle", "Flat"],
    correctAnswer: "Round"}

];
console.log(surveyQuestions[0].question)


//---------------GAME SETUP---------------//

// Define all the global variables here that will run the game 
// Always end stuff unside an objet with a comma, instead of semicolon
// This is called a constructor 
// We declared methods and properties in this survey object
var survey = {
    totalScore: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    questions: surveyQuestions,
    // Function that puts the questions on the page 
    // When the page loads, the user will get a message that tells what the survey is about 
    // When user clicks start button, questions will dynamically appear on the page

    // Loop through the answers and grab them dynamically through the array
    showQuestions: function() {
        for (i = 0; i < survey.questions.length; i++) {
            console.log(survey.questions[i]);
            // Show question inside of survey and concat
            // "." is how we move through all the objects in our array (Opening the next level in our object)
            $(".questions-text").append("<p><strong>" + survey.questions[i].question + "</strong></p>")
            for (j = 0; j < survey.questions[i].answers.length; j++) {
                $(".questions-text").append("<p>" + survey.questions[i].answers[j] + "</p>")
            }
        } 
    }
}
    // console.log(survey.questions)
$("#start").on("click", function () {
    survey.showQuestions();
});


// Tell the computer which choices are correct in each question

// When user clicks submit, run each selection against the correct answers

// If user chose the correct answer, then it's true

    // Add a point to total questions correct counter

// If user chose a wrong answer, it's false

    // Don't add any points

// If user didn't make any selection, it's false

    // Don't add any points

