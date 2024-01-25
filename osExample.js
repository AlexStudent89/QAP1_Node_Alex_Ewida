// The OS object

// To Import the os module
const os = require('os');

// The os.arch() can get the architecture of the operating system
console.log("Architecture:", os.arch());

// The os.platform() will get the platform of the operating system
console.log("Platform:", os.platform());

// This os.totalmem() can bring the total amount of system memory
console.log("Total Memory:", os.totalmem() / (1024 * 1024), "MB");

// Using os.cpus() to get information about the CPUs
console.log("CPUs:", os.cpus().length);