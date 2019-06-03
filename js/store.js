const STORE = {
    currentPage: "opening",
    currentQuestion: 1,
    questions: [
        {
        id: 1,
        question: "How much wood could a wood chuck chuck, if a wood chuck could chuck wood?",
        userAnswer: null,
        correctAnswer: 1,
        choices: [
        {
            id:1,
            answer: "Probably not much, have you seen those stubby little arms?",
            correct: true
        },
        {
            id:2,
            answer:"	A wood chuck could chuck, as much as a wood chuck wood chuck, if a wood chuck could chuck wood.",
            correct: false
        },
        {
            id:3,
            answer:"I can't give you an answer without a more in-depth evaluation of the biomechanics involved.  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1357215/",
            correct: false
        }]},
        {
        id: 2,
        question: "What is love?",
        userAnswer: null,
        choices: [
        {
            id:1,
            answer:"Baby don't hurt me.",
            correct: false
        },
        {
            id:2,
            answer:"A neuro-chemical cascade triggered by a person with the intersection of specific evolutionary, cultural  development characteristics that is important in the propagation of mammals.",
            correct: false
        },
        {
            id:3,
            answer: "What isn't love?",
            correct: true
        }]},
        {
        id: 3,
        question: "Which came first, the chicken or the egg?",
        userAnswer: null,
        choices: [
        {
            id:1,
            answer: "The Chicken",
            correct: false
        },
        {
            id:2,
            answer: "The Egg",
            correct: false
        },
        {
            id:3,
            answer: "The Dinosaur",
            correct: true
        }]},
        {
        id: 4,
        question: "What is the most amazing thing you've seen in your life?",
        userAnswer: null,
        choices: [
        {
            id:1,
            answer: " I saw the sign",
            correct: false
        },
        {
            id:2,
            answer: "Acetaminophen",
            correct: false
        },
        {
            id:3,
            answer: "God",
            correct: false
        },
        {  
            id:3,   
            answer: "A See-Saw",
            correct: true
        }]},
        {
        id: 5,
        question: "What is the sound of one hands clapping?",
        userAnswer: null,
        choices: [
        {
            id:1,
            answer: "*Silence",
            correct: false
        },
        {
            id:2,
            answer: "*Faint sound of fingers hitting palm",
            correct: true
        },
        {
            id:3,
            answer: "*Enlightenment (Sound of the universe springing into being or a faint effervescence.)",
            correct: false
        }]}

    ]};