const openingModule = (function(){

    let _render;

    function _handleStartQuiz(state){
        $("#startQuiz").click(function(e){
            console.log("Ready button clicked")
            const newState = {
                ...state,
                currentPage: "quizQuestion"
            }
            _render(newState);
        })
    }

    function renderPage(state){
    console.log(state)
        const page = `
            <div class= "wrapper">
                <header role="banner">
                    <h1 class="beginning">The World's Greatest Quiz App<br></h1>
                </header>

                <main role="main" id="opening">
                    <h2>(in the world)</h2>
                    <p>Are you ready to begin?</p>
                    <button id="bornReady">I was born ready!</button>
                    <button id="startQuiz" class="button">Ready</button>
                    <button id="halfAss">I'll Half-Assedly Attempt to be ready</button>
                    <button id="notReady">Not <span class="redE">E</span></button>
                </main>
            </div>
        `;
        $("#root").html(page);
        _handleStartQuiz(state);
    }

    function initialize(mainRender){
        _render = mainRender;
    }

    return {
        render: renderPage,
        initialize
    }
})()