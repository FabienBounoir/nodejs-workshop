const express = require("express");
const router = express.Router();

const { getBook, createbooks, patchbook, deletebook } = require("../controllers/books")

//met route
router.get("/", getBook);
router.post("/", createbooks);
router.delete("/:id", deletebook);
router.patch("/:id", patchbook);

module.exports = router