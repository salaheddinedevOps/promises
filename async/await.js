const axios = require('axios');
async function connectToURL(url){
    const resp = await axios.get(url);
    let listOfEntries = resp.data.entries;
    let Categories = listOfEntries.map((entry)=>{
          return entry.Category
    });
    Categories = [...new Set(Categories)];

    Categories.forEach(async (Category)=>{
      if (Category.startsWith("A")) {
              try {
                const resp = await axios({
                  method: 'get',
                  url: "https://api.publicapis.org/entries?Category="+Category,
                  responseType: 'json'
                })
                console.log(Category+"   "+resp.data.count);
              } 
              catch(e) {
                console.log(e);
              }
      }
    });
}
connectToURL('https://api.publicapis.org/entries').catch(err => {
    console.log(err.toString())
});