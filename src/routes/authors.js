const express = require("express");
const router = express.Router();

const { getauthors, createauthors, patchauthor, deleteauthor } = require("../controllers/authors")

//#region get
router.get("/", getauthors);
//#endregion

//#region post
router.post("/", createauthors);
//#endregion

//#region patch
router.patch("/:id", deleteauthor);
//#endregion

//#region delete
router.delete("/:id", patchauthor);
//#endregion

module.exports = router
