export const quizQuestions = {
    questions: [
        {
            type: "single-choice",
            question: "pytanie numer jeden",
            choices: [
                "odpowiedz 1",
                "odpowiedz 2",
                "odpowiedz 3",
                "odpowiedz 4",
            ],
            correctAnswer: "odpowiedz 3"
        },

        {
            type: "create-sentence",
            question: "pytanie numer dwa",
            choices: [
                "hello",
                "world",                
            ],
            correctAnswer: "hello world"
        },

        {
            type: "create-sentence",
            question: "pytanie numer trzy",
            choices: [
                "hello",
                "cat",                
            ],
            correctAnswer: "hello cat"
        }
    ]

}

export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
}