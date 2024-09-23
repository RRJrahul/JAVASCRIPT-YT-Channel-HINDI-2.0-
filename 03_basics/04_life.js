//Immediately Invoked Function Expression(IIFE)
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); // put ; while writing two IIFE function

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Rahul')