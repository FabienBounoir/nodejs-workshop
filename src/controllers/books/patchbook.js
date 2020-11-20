module.exports = function(req, res, next){
    console.log(req.params)
    res.status(203).json({
        message: `book delete (id: "${req.params.id}") modifie`
    })
}