// Immediately Invoked Function Expressions (IIFE)

(function iife() {
    console.log(`DB connected`);
}) (); // Semi colon is must for multiple iife execution

( (arg) => {
    console.log(`2nd DB connected ${arg}`);
} ) ("Horray!")