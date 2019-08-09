const express = require('express');
const bodyParser = require('body-parser');
const api = require('./Routes/api');
const cors = require('cors')
mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Events" ,err => {
    if(err){
        console.error(`Eroro ! ${err}`);
    }else{
        console.log(`Connected to MongoDB`)
    }
});
 
const port = 8080;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', api)
app.get('/',function(request,response){
    response.send('Hello from Server')
});

app.listen(port,function(){
    console.log(`Server Running on Localhost : ${port}`)
});