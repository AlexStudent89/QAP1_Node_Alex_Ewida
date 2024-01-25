// Buffers

// To make a Buffer and add data
const buffer = Buffer.alloc(5);
buffer.write("Hello");

// Reading from the buffer
console.log("Buffer content:", buffer.toString());

// Creating a buffer from an array of integers
const bufferFromArray = Buffer.from([65, 66, 67, 68, 69]);
console.log("Buffer from array:", bufferFromArray.toString());

// Concatenated buffers
const concatenatedBuffer = Buffer.concat([buffer, bufferFromArray]);
console.log("Concatenated Buffer:", concatenatedBuffer.toString());