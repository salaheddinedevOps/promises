let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello world!");
    },8000)
});
myPromise.then((successMessage) => {
    console.log(successMessage);
})
console.log("Promise resolved");