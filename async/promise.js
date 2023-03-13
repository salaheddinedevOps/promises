//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },8000)})
//Console log before calling the promise
console.log("Before calling promise");
//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
//Console log after calling the promise
  console.log("After calling promise");
  let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Promise resolved2")
    },3000)
  });
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage);
});