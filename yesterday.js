const axios = require('axios')

async function getURL (url){
    try{
        const JSON  = await axios.get(url)
        console.log(JSON.data.yesterday)

    }catch(error){
        console.log("error is:", error.message)
    }
}

getURL('http://localhost:3000/json');