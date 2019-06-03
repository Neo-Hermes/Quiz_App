const quizModule = (function(){

    let _render;

    function handleAnswer(state){
        $("#nextAnswer").click(function(e){
            const currentAnswer = state.questions.find(question => question.correctAnswer);
            const newState = {
                ...state,
                currentQuestion: currentAnswer
            }
            console.log(currentAnswer);
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
            <button id="currentAnswer">Next</button>
            <div>
                <form class ="question" action ="/some-server-endpoint" method ="post">
                <legend>Question</legend>
                ${choices}
            </div>
        `;
        // cost wrapped = commonModule.mainLayout(page);
        $("#root").html(page);
        handleAnswer(state);
        
    }

    function initialize(mainRender){
        _render = mainRender;
    }

    return {
        render: renderPage,
        initialize
    }
})()