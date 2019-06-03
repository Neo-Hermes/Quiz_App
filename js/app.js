'use strict'

  const myModule1 = (function() {
      return{}
  })();

  const myCounter = (function() {

      let _counter = 0;

      function increment() {
          counter++;
      }

      function getCounter() {
          return _counter;
      }

      return {
          increment:increment,
          getCounter
      }
  })()

const STORE = {
    currentPage: null,
    currentQuestion: 1,
    questions: [
        {
        id: 1,
        question: "How much wood could a wood chuck chuck, if a wood chuck could chuck wood?",
        userAnswer: null,
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

    const mainModule = (function() {

        function render(state) {
            if(state.currentPage === "myModule") {
                myModule1.render(state);
            }
        }

    function run() {
        myModule1.initialize(render);

        render(STORE);
    }

    return {
        run,
        render
    }
    })();

// An example module
// this should be defined BEFORE the last main module, but we are writing it here for ease of demonstration

const myModule = (function() {
    // this will store a reference to the main render that we pass in when we initalize the module
    // this gives us access to calling the main render cycle inside out modules.
    let _render;

    function renderPage(state) {
    // this takes in the main render and sets it to a local variable.
    // can also be used for setting up other things our modules might need.
    _render mainRender;
    }

// var render = function (template, node) {
//     node.innerHTML = template;
// };

// var template = '<h1>Hello world!</h1>';
// render(template, document.querySelector('#main')); 

    return {
        initialize,
        render:renderPage
    }


})();



// event handlers

function handleNotReady() {
    $("#opening").on('click', "#notReady", event => {
        //render quiz app to the DOM
        console.log("working!");
        alert("I don't know what to say, why are you even here?");
    })
}

function handleBornReady() {
    $("#opening").on('click', "#bornReady", event => {
        //render quiz app to the DOM
        console.log("working!");
        alert("That's not physiologically possbile.  Please revise your understanding of human development and try again.");
    })
}

function handleHalfAss() {
    $("#opening").on('click', "#halfAss", event => {
        //render quiz app to the DOM
        console.log("working!");
        alert("The ass can't be half full or half emtpy.  Ass-ess yourself and try again.");
    })
}

//Functions that do stuff


//Generate HTML for Questions

function generateQuestionElement (question, questionIndex, template) {
    return `
    <div>
    <form class ="question" action ="/some-server-endpoint" method ="post">
    <legend>Question</legend>
        <input type="radio" name="question" value="a)">a)<br>
        <input type="radio" name="question" value="b)">b)<br>
        <input type="radio" name="question" value="c)">c)<br>          
</div>`;
}


//Generate a string from the Data in the function above

function generateQuestionString(questionData) {
    console.log("Generating question list element");

    const question = questionData.map((question,index)
    => generateQuestionElement(question, index));
    return question.join("");

}


//Render to DOM

function renderQuestion() {
    console.log("renderQuestion ran");
    const quizAppString = generateQuestionString(STORE);

    // insert HTML into the DOM
    $("#questionBody").html('quizAppString');
}


// find and list current page
// make place for score
// render question and possible answers
// 


function handleQuiz() {
    handleBornReady();
    handleHalfAss();
    handleNotReady();
    renderQuestion();
}

$(handleQuiz);