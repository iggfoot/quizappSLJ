let score = 0;
let currentQuestion = 0;
let quizQuestions = [
  {
    text: 'What is the Bible verse Jules Winnfield likes to recite in "Pulp Fiction" ?',
    choices: ['Genesis 3:8', '1 Thessalonians 5:11', 'Ezekiel 25:17', 'Ezra 9:9'],
    correctAnswer: 2
  },
]

///////////Event Handlers////////////
function beginQuiz() {
  $('#begin').click(function(event) {
      event.preventDefault();
      $('.start').hide();
      $('.quiz').show();
      showQuestion();     
    })
};



/////////////////////////////////////

function showQuestion() {
    let question = quizQuestions[currentQuestion];
    console.log(`question = ${question}`);
    $('.quiz h2').text(question.text);
    $('.quiz form').html('');
    for (var i = 0; i < question.choices.length; i ++) {
        $('.quiz form').append(`<input type="radio" name="choice" value="${i}" checked>${question.choices[i]}<br>`);   
    };
    $('#question-counter').text(`Question ${currentQuestion + 1}`);
    $('#score-counter').text(`Score: ${score} out of ${quizQuestions.length}`);
    //submitAnswer();
};

function handleSamQuiz () {
  beginQuiz();
  //submitAnswer();
  //restartQuiz();
};

$handleSamQuiz();
