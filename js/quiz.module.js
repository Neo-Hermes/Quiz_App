const quizModule = (function(){

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

    function renderChoice(choice){
        return `                 
            <input type="radio" name="answer-${choice.id}" value="${choice.id}" > <p>${choice.answer}</p><br>
            `
    };

    function renderChoices(choices){
        
        return choices.map(renderChoice).join("")

    };

    function renderPage(state){
        const currentQuestion = state.questions.find(question => question.id === state.currentQuestion)
        const choices = renderChoices(currentQuestion.choices);
        console.log(state)
        const page = `
            <button id="nextQuestion">Next</button>
            <div>
                <form class ="question" action ="/some-server-endpoint" method ="post">
                <legend>Question</legend>
                ${choices}
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