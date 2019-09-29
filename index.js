let score = 0;
let currentQuestion = 0;
let quizQuestions = [
  {
    text: 'What is the Bible verse Jules Winnfield likes to recite in "Pulp Fiction" ?',
    choices: ['Genesis 3:8', '1 Thessalonians 5:11', 'Ezekiel 25:17', 'Ezra 9:9'],
    correctAnswer: 2
  },

  {
    text: `In "Formula 51, what is Elmo McElroy's signature piece of clothing:`,
    choices: ['a kilt','an ascot', 'knee high socks', 'nothing - Elmo prefers nudity'],
    correctAnswer: 0
  },

  { 
    text: 'In "Jumper", Roland belongs to a group called:',
    choices: ['The Knights Templar', 'The White Knights', 'The Jumpers', 'The Paladins'],
    correctAnswer: 3
  },

  {
    text: 'In "Captain Marvel", where did Nick Fury say he was born?',
    choices:  ['Latveria', 'Huntsville, Alabama', 'Orange County, California', 'Detroit, Michigan'],
    correctAnswer: 1
  },

  {
    text: `In "Unbreakable", What does Elijah Price's mother use to get Elijah out of the house?`,
    choices: ['comic books', 'GI Joes', 'basketball cards','new sneakers'],
    correctAnswer: 0
  },
]

function beginQuiz() {
    $('#begin').click(function(event) {
        event.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();     
      })
}

function showQuestion() {
    let question = quizQuestions[currentQuestion];
    $('.quiz h2').text(question.text);
    $('.quiz form').html('');
    for (var i = 0; i < question.choices.length; i ++) {
        $('.quiz form').append(`<input type="radio" name="choice" value="${i}" checked>${question.choices[i]}<br>`);   
    };
    $('#question-counter').text(`Question ${currentQuestion + 1} of ${quizQuestions.length}`);
    $('#score-counter').text(`Score: ${score} out of ${quizQuestions.length}`);
    submitAnswer();
}

function submitAnswer() {
    $('input[type=radio] ').on('click', function(){
        var guess = $('input:checked').val();
        console.log(`guess = ${guess}`);
    });
  }

  $('#submit-answer').click(function(event) {
    event.preventDefault();
    var guess = $('input:checked').val();
    console.log(`guess = ${guess}`);
  
    let question = quizQuestions[currentQuestion];
    if (guess == question.correctAnswer) {
        score++;
        rightAnswerView();
    } else {
        wrongAnswerView();
    };
  
    currentQuestion++;
    console.log(`currentQuestion = ${currentQuestion}`)
  
    if (currentQuestion >= quizQuestions.length) {
        finalResults();
    } else {
        showQuestion();
    }
  });

function rightAnswerView() {
   $('.quiz').hide();
   $('.right-answer').show();
   
   $('#right-continue-quiz').click(function(event) {
     event.preventDefault();
     $('.right-answer').hide();
     $('.quiz').show();
   })

}

function wrongAnswerView() {
   let question = quizQuestions[currentQuestion];
   let actualAnswer = question.correctAnswer;
   console.log(actualAnswer);
   $('.quiz').hide();
   $('#actual').text(`The correct answer is ${question.choices[actualAnswer]}`);   
   $('.wrong-answer').show();

   $('#wrong-continue-quiz').click(function(event) {
    event.preventDefault();
    $('.wrong-answer').hide();
    $('.quiz').show();
  })

};


function finalResults() {
  $('.quiz').hide();
  $('.right-answer').hide();
  $('.wrong-answer').hide();
  $('.results').show();
  $('.results p').text("Final Score: " + score + " out of " + quizQuestions.length + "!")

  $('#restart-quiz').click(function(event) {
    $('.results').hide();
    $('.quiz').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
  });
}

function handleSamQuiz() {
    beginQuiz();
    submitAnswer();
}

$(handleSamQuiz);