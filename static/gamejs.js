document.addEventListener("DOMContentLoaded", function() {
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");
  var submitButton = document.getElementById("submit");
  var scoreElement = document.getElementById("score");
  var feedbackElement = document.getElementById("feedback");
  var restartButton = document.getElementById("restart");

  var score = 0;
  var currentQuestionIndex = 0;

  var questions = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Jupiter", "Earth", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the capital city of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra"
    },
    {
      question: "Who is credited with the invention of the World Wide Web?",
      choices: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Tim Berners-Lee"],
      answer: "Tim Berners-Lee"
    },
    {
      question: "Which scientist proposed the theory of general relativity?",
      choices: ["Isaac Newton", "Marie Curie", "Albert Einstein", "Nikola Tesla"],
      answer: "Albert Einstein"
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      choices: ["Marie Curie", "Rosa Parks", "Amelia Earhart", "Mother Teresa"],
      answer: "Marie Curie"
    },
    {
      question: "Who is considered the father of modern computer science?",
      choices: ["John von Neumann", "Charles Babbage", "Ada Lovelace", "Alan Turing"],
      answer: "Alan Turing"
    },
    {
      question: "What is the chemical symbol for the element Tungsten?",
      choices: ["Tg", "Tu", "W", "Tm"],
      answer: "W"
    },
    {
      question: "In which year did World War I begin?",
      choices: ["1914", "1916", "1918", "1920"],
      answer: "1914"
    },
    {
      question: "What is the chemical formula for table salt?",
      choices: ["H2O", "CO2", "NaCl", "HCl"],
      answer: "NaCl"
    },
    {
      question: "Which artist painted the famous artwork 'The Starry Night'?",
      choices: ["Leonardo da Vinci", "Salvador Dali", "Pablo Picasso", "Vincent van Gogh"],
      answer: "Vincent van Gogh"
    },
    {
      question: "Which country is the largest producer of coffee in the world?",
      choices: ["Vietnam", "Colombia", "Ethiopia", "Brazil"],
      answer: "Brazil"
    },
    {
      question: "Who wrote the novel 'To Kill a Mockingbird'?",
      choices: ["J.D. Salinger", "Ernest Hemingway", " Harper Lee", " F. Scott Fitzgerald"],
      answer: "Harper Lee"
    },
    {
      question: "What is the capital city of Canada?",
      choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: "Ottawa"
    },
    {
      question: "Which of the following is NOT a greenhouse gas?",
      choices: ["Carbon dioxide", "Methane", "Oxygen", " Nitrous oxide"],
      answer: "Oxygen"
    },
    {
      question: "What is the chemical symbol for gold?",
      choices: ["Pt", "Ag", "Fe", "Au"],
      answer: "Au"
    },
    {
      question: "Which of the following mathematicians proved the Riemann Hypothesis?",
      choices: ["Pierre-Simon Laplace", "Srinivasa Ramanujan", "Andrew Wiles", "Grigori Perelman"],
      answer: "Andrew Wiles"
    },
    {
      question: "Which of the following is a fundamental particle that does not interact through any of the fundamental forces?",
      choices: ["Electron", "Neutrino", "Quark", "Photon"],
      answer: "Photon"
    },
    {
      question: "Which of the following scientists proposed the concept of parallel universes?",
      choices: ["Hugh Everett III", "Max Planck", "Erwin Schrödinger", "Albert Einstein"],
      answer: "Hugh Everett III"
    },
    {
      question: "Which of the following chemical elements has the highest electronegativity?",
      choices: ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
      answer: "Fluorine"
    }
    
  ];

  function displayNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // End of the quiz
        displayScore();
        return;
    }

    var question = questions[currentQuestionIndex];
    displayQuestion(question.question, question.choices);
}

  function submitAnswer(answer) {
      var question = questions[currentQuestionIndex];
      if (answer === question.answer) {
          // Correct answer
          score++;
          feedbackElement.textContent = "Correct!";
      } else {
          // Incorrect answer
          feedbackElement.textContent = "Wrong answer!";
      }

      setTimeout(function() {
          feedbackElement.textContent = "";
          currentQuestionIndex++;
          displayNextQuestion();
      }, 1000); // Delay before moving to the next question (1 second)
  }

  function displayScore() {
      questionElement.textContent = "Quiz completed!";
      choicesElement.innerHTML = "";
      feedbackElement.textContent = "Your score: " + score + " out of " + questions.length;
      scoreElement.textContent = "Score: " + score + " out of " + questions.length;
      restartButton.style.display = "block"; // Show the restart button
  }

  function displayQuestion(question, choices) {
      questionElement.textContent = question;
      choicesElement.innerHTML = "";

      choices.forEach(function(choice) {
          var button = document.createElement("button");
          button.textContent = choice;
          button.onclick = function() {
              submitAnswer(choice);
          };
          choicesElement.appendChild(button);
      });
  }

  function restartQuiz() {
      score = 0;
      currentQuestionIndex = 0;
      feedbackElement.textContent = "";
      restartButton.style.display = "none"; // Hide the restart button
      displayNextQuestion();
  }

  restartButton.addEventListener("click", restartQuiz);

  displayNextQuestion(); // Start the quiz
});
