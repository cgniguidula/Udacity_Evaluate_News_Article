const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const app = express();
app.use(express.static('dist'));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const fetch = require("node-fetch");

app.get('/', function (req, res) {
    res.sendFile('../dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () { 
    console.log('Example app listening on port 8081!')
})

app.post('/submitForm', function (req, res) {
    let baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&lang=en&txt=";
    let urlEnd = "&model=general";
   
    getWebData(baseUrl, req.body.userInput, urlEnd)
   .then(function(data){
        res.send({results: data});
   })
})

const getWebData = async function(baseUrl, userInput, urlEnd){
    const response = await fetch(baseUrl+userInput+urlEnd)
    try{
        const data = await response.json();
        return data;
    } catch(error){
        console.log("ERROR: " + error);
    }
}

module.exports = {getWebData}

