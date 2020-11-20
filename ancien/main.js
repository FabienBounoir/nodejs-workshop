//avec http

// const http = require("http");

// function requestListener(req, res) {
//     if(req.url === "/home"){
//         res.write("<h1>bonjour je m'appelle fabien</h1>")
//     }
//     else if(req.url === "/contact"){
//         res.write("<h1>contact me</h1>")
//     }
//     else{
//         res.write("<h1>erreur 404</h1>")
//     }
//     res.end() 
// }

// const server = http.createServer(requestListener);

// server.listen(3000);

///////////////////////////////////////////////////////////////////////////:
//avec express

const express = require("express");
const app = express();

app.use("/test", function(req, res, next){
    // console.log(req.url)
    // console.log(req.params)
    // console.log(req.query)
    // console.log(req.body)

    res.status(418).json({
        message : "JSON"
    })
});

app.listen(3000)