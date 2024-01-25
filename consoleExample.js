// The Console

// Print a simple message
console.log("Hello, this is a console log message!");

// To print an error message
console.error("Oops! This is an error message.");

// Printing a warning message
console.warn("Be cautious! This is a warning message.");

// Measuring the execution time of the code block
console.time("timer");
for (let i = 0; i < 1000000; i++) {
    // Some time-consuming operation
}
console.timeEnd("timer");