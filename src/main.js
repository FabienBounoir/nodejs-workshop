const express = require("express");
const app = express();
const mongoose = require("mongoose")

const authorsRoutes = require("./routes/authors.js")
const booksRoutes = require("./routes/books.js")

mongoose.connect('mongodb://127.0.0.1:27017/workshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

app.use("/authors", authorsRoutes)
app.use("/books", booksRoutes)

app.listen(3000)