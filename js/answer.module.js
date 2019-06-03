const answerModule = (function(){

    let _render;

    function handleNextQuestion(state){
        $("#nextQuestion").click(function(e){
            const nextQuestion = state.currentQuestion += 1;
            const newState = {
                ...state,
                currentQuestion: nextQuestion
            }
            console.log(nextQuestion);
            _render(newState)
        })
    };

    function renderAnswer(answer){
        return `                 
            <h1 name="answer-${answer.correctAnswer}" value="${answer.correctAnswer}" > <p>${answer.answer}</h1><br>
            `
    };

    function renderChoices(choices){
        
        return choices.map(renderChoice).join("")

    };

    function renderPage(state){
        const currentAnswer = state.questions.find(question => question.id === state.currentQuestion)
        const choices = renderChoices(currentQuestion.choices);
        console.log(state)
        const page = `
            <button id="nextQuestion">Next</button>
            <div>
                <form class ="question" action ="/some-server-endpoint" method ="post">
                <legend>Question</legend>
                ${correctAnswer}
            </div>
        `;
        // cost wrapped = commonModule.mainLayout(page);
        $("#root").html(page);
        handleNextQuestion(state);
        
    }

    function initialize(mainRender){
        _render = mainRender;
    }

    return {
        render: renderPage,
        initialize
    }
})()