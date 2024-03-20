export const quizQuestions = {
  questionsOne: [
    {
      type: 'single-choice',
      question: 'pytanie numer jeden',
      choices: ['odpowiedz 1', 'odpowiedz 2', 'odpowiedz 3', 'odpowiedz 4'],
      correctAnswer: 'odpowiedz 3',
    },

    {
      type: 'create-sentence',
      question: 'pytanie numer dwa',
      choices: ['hello', 'world'],
      correctAnswer: 'hello world',
    },

    {
      type: 'create-sentence',
      question: 'pytanie numer trzy',
      choices: ['hello', 'cat'],
      correctAnswer: 'hello cat',
    },

    {
      type: 'single-choice',
      question: 'a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.\n \nO jakie zwierze chodzi?',
      choices: ['Kot', 'Pies', 'Szczur'],
      correctAnswer: 'Kot',
    },
  ],
}

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
}
