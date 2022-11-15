const fs = require("fs")
const express = require("express")
const app = express()

var date = new Date()
var currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
var currectTime = date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds()
var dateAndtime = currentDate + " and " + currectTime;


var timeStamp = date.getHours() + " Hours " + date.getMinutes() + " Minutes " + date.getSeconds() + " Seconds " + date.getMilliseconds() + " Milliseconds"


fs.mkdir("./task", () => {
    console.log("folder created")
})

// fs.writeFile(`./task/${dateAndtime}.txt`,timeStamp,(err)=>{
//     if(err)  throw err;

//     console.log("file created")
// })

app.get("/timestamp", (req, res) => {
    fs.writeFile(`./task/${dateAndtime}.txt`, timeStamp, (err) => {
        if (err) throw err;
        console.log("file created")
    }),
        res.json({ message: `successfully file created. Filename is ${dateAndtime} and Content of the file ${timeStamp}` }
        )
})

app.listen(3006)