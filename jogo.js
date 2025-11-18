const questions = [
    {
      question: "Qual é a capital do Brasil?",
      answers: [
        { text: "Rio de Janeiro", correct: false },
        { text: "Brasília", correct: true },
        { text: "São Paulo", correct: false },
        { text: "Salvador", correct: false }
      ]
    },
    {
      question: "Quem escreveu 'Dom Casmurro'?",
      answers: [
        { text: "Machado de Assis", correct: true },
        { text: "José de Alencar", correct: false },
        { text: "Carlos Drummond", correct: false },
        { text: "Clarice Lispector", correct: false }
      ]
    },
    {
      question: "Qual o resultado de 7 x 8?",
      answers: [
        { text: "54", correct: false },
        { text: "56", correct: true },
        { text: "58", correct: false },
        { text: "60", correct: false }
      ]
    }
  ];
  
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  
  let currentQuestionIndex = 0;
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = '';
  
    currentQuestion.answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.textContent = answer.text;
      btn.onclick = () => {
        if(answer.correct) {
          alert('Resposta correta!');
        } else {
          alert('Resposta incorreta!');
        }
        nextQuestion();
      }
      answersEl.appendChild(btn);
    });
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "Quiz finalizado!";
      answersEl.innerHTML = '';
    }
  }
  
  showQuestion();
  