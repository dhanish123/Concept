
// new Promise((res, rej) => {
//   const condition = true;
//   if (condition) {
//     res("COrrecrt");
//   } else {
//     rej("Incorrect");
//   }
// })
//   .then(console.log)
//   .catch(console.error);

//async /await
// async function check() {
//   const condition = true;
//   if (condition) return "Co  rrect";
//   throw "Incorrect";
// }

// try {
//   const result = await check();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }


// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");


console.log("Start");
setTimeout(() => {
  console.log("Async task done");
}, 1000);
console.log("End");
