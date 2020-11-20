const Author = require("../../models/authors")

module.exports = async function(req, res, next){
    const Authors = await Author.find().exec()
    res.status(200).json({
        Authors
    })
};