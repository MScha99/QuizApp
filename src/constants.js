export const quizQuestions = {
  questionsOne: [
    {
      type: 'single-choice',
      question: 'Cześć',
      choices: ['Elsa', 'Terve', 'Tervetuloa', 'Onnea'],
      correctAnswer: 'Terve',
    },

    {
      type: 'single-choice',
      question: 'Witam',
      choices: ['Terve', 'Tervetuloa', 'Onnea', 'Otso', 'olemee'],
      correctAnswer: 'Tervetuloa',
    },

    {
      type: 'single-choice',
      question: 'Nainen',
      choices: ['nie', 'mężczyzna', 'kobieta', 'dziecko', 'nie wiem'],
      correctAnswer: 'kobieta',
    },

    {
      type: 'single-choice',
      question: 'Anteeksi',
      choices: ['Dziękuję', 'Przepraszam', 'Na razie', 'Cześć', 'Usiądź'],
      correctAnswer: 'Przepraszam',
    },

    {
      type: 'create-sentence',
      question: 'Cześć! Kim jesteś?',
      choices: [
        'Kuka', 'mies', 'sauna', 'olet', 'sinä', 'Terve', 'Onnea', 'hän'],
      correctAnswer: 'Terve Kuka sinä olet',
    },

    {
      type: 'create-sentence',
      question: 'Jestem Otso',
      choices: ['Terve', 'Onnea', 'Otso', 'olemee', 'Minä', 'olen'],
      correctAnswer: 'Minä olen Otso',
    },

    {
      type: 'single-choice',
      question: 'Dziecko',
      choices: ['lapsi', 'väinö', 'mies', 'hauska', 'onnea', 'sinä'],
      correctAnswer: 'lapsi',
    },
  ],
}

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
}
