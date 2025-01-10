const { simfetch } = require(".");

let sf = new simfetch({
    baseurl:'https://api.example.com/v1',
    headers:{
        'Content-Type':'application/json'
     }
})

sf.get('/users')
 .then((data)=>{
    console.log("users", data)
 })
 .catch((error)=>{
    console.log("error fetching data: ", error);
    
 })