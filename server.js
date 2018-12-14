var express = require('express');
var bodyParser =require ('body-parser')
var cors =require ('cors')

var app = express();
app.use(bodyParser.json())
app.use(cors())


app.get('/api/timestamp/:dateVal',(req,res,next)=>{
        var dateVal=req.params.dateVal
        var dateFormattingOptions={
            year:'numeric',
            month:'long',
            day:'numeric'
        }
        if (isNaN(dateVal)){
            var naturalDate=new Date(dateVal)
            naturalDate=naturalDate.toLocaleDateString('en-us',dateFormattingOptions)
            var unix = new Date(dateVal).getTime() /1000

        }
        else{
            unix=dateVal
            var naturalDate = new Date(dateVal*1000)
            naturalDate=naturalDate.toLocaleDateString('en-us',dateFormattingOptions)
        }
        res.json({
            unix:unix,natural:naturalDate
        })
       
})
app.get('/api/timestamp/',(req,res,next)=>{
            var dateFormattingOptions={
            year:'numeric',
            month:'long',
            day:'numeric'
        }
    var naturalDate=new Date()
    naturalDate=naturalDate.toLocaleTimeString('en-us',dateFormattingOptions)
    var unix = new Date().getTime() /1000
    res.json({
        unix:unix,natural:naturalDate
    })
})

app.listen(3000,()=> console.log('started on port 3000'));