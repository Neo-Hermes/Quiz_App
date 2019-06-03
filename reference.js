// Immediately Invoked Function Expression  
// These just create a function and invoke it immediately.
// The return of the function gets assigned to the variable.

const myModule1 = (function() {
  // returns an empty object for now
  return {}
})()
// notice the ( function(){} )() pattern.  The second set of brackets invokes the fucntion defined in the first.

// this is the same as this

function myFunction() {
  // returns an empty object for now
  return {}
}

const myModule2 = myFunction();

// We use the IIFE structure to create a SCOPE inside our module.
// in this scope we can define, run and use PRIVATE variables and functions.
// We then add key/value pairs to the objects of things we want to be used publicly.
// This object is the INTERFACE to our module, and is composed of PUBLIC properties.
// Important concepts: PUBLIC vs PRIVATE, SCOPE, MODULE, INTERFACE, IIFE

// Trivial counter as an IIFE

const myCounter = (function() {
  // Private scope
  // We use an _ to signify it is private.
  // This counter is only accessible inside the local function scope.
  
  let _counter = 0;
 
  // This function has nop _ because it will be made public
  
  function increment() {
    counter++;
  }
  
  function getCounter() {
    return _counter;
  }
  
  // this object is our public interface that is returned.
 
  return {
    increment: increment,
    getCounter
    // this can also be done with object shorthand, like the second property above.
  }
})()

// store object for initalizing state
const STORE = {
  currentPage: "myModule"
}

// For our core pattern, we have a main module, with two interfaces.  Run, and Render. It is the application root.
// Our individual pages will have their own modules, and there will probably be a common module.
// Main module is the entry of the application.  It initiates other modules, and contains the main
// render for the application.
// We also have a state, which will track various things.  For now, it will just have a currentPage, which we will
// hook up to 

const mainModule = (function() {

  // we always refer to the STORE as state everywhere but where we initially invoke.
  // then we can create new states from old ones, and our app can use immutable patterns.
  function render(state) {
    if(state.currentPage === "myModule") {
      myModule.render(state);
    }
  }
  
  // Main root function that starts the app.  Responsible for initializing any modules, and rendering the initial view
  // based upon the STORE
  function run() {
    // We initialize our modules with our main render so they have access to it.
    myModule.initialize(render);
  
    render(STORE);
  }
  

  return {
    run,
    render
  }
})();

// An example module
// this should be defined BEFORE the last main module, but we are qwriting it here for ease of demonstration

const myModule = (function() {
  // this will store a reference to the main render that we pass in when we initalize the module
  // this gives us access to calling the main render cycle inside out modules.
  let _render;

  function renderPage(state){
     // this would render the oage in question from the state with various render functions that return strings
     // and dump them into the dom.
  }
  
  function initalize(mainRender) {
    // this takes in the main render and sets it to a local variable.
    // can also be used for setting up other things our modules might need.
    _render mainRender;
  }
  
  return {
    initalize,
    render: renderPage
  }

})()