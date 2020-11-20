const express = require("express");
const app = express();

const authorsRoutes = require("./routes/authors")
const booksRoutes = require("./routes/books")

app.use("/authors", authorsRoutes)
app.use("/books", booksRoutes)

app.listen(3000)