const axios = require('axios');
const connectToURL = (url)=>{
    const req = axios.get(url);
    req.then(response =>{
        let listOfEntries = response.data.entries;
        console.log(listOfEntries);
        listOfEntries.forEach((entry) =>{
            console.log(entry.Category);
        })
    })
}
console.log("Before connect URL");
connectToURL('https://api.publicapis.org/entries');
console.log("After connect URL");