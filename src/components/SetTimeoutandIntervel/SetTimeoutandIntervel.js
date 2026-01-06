// Runs once after 2 seconds
// setTimeout(() => {
//   console.log('This runs after 2 seconds');
// }, 2000);

// Runs every 1 second
const intervalId = setInterval(() => {
  console.log('This runs every 1 second');
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped');
}, 6000);
