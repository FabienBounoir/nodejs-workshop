const { patch } = require("../../routes/books");
const createbooks = require("./createbooks");
const deletebook = require("./deletebook");
const getbooks = require("./getbooks");
const patchbook = require("./patchbook");

module.exports = {
    getBook: require("./getbooks"),
    createbooks: require("./createbooks"),
    patchbook: require("./patchbook"),
    deletebook: require("./deletebook"),
}