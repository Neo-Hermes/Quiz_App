const mainModule = (function(){

    function render(state){
        if (state.currentPage === "opening"){
            openingModule.render(state);
        }

        if(state.currentPage === "quizQuestion"){
            console.log("render quiz page");
            quizModule.render(state);
        }
    }


    function run(){
        console.log("Hello World");
        openingModule.initialize(render);
        quizModule.initialize(render);
        render(STORE)
    }



    return {
        run
    };
})()

$(mainModule.run)