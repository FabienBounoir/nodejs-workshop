const Author = require("../../models/authors");

module.exports = function(req, res, next){

    new Author({
        "name": "Fabien"
    }).save().then(document =>{
        res.status(201).json({
            author: document
        })  
    })
}