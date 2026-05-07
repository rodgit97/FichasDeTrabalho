const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");
const { authenticateTokenFromHeaders } = require("./index");

router.use(authenticateTokenFromHeaders);

router.get("/", booksController.getAllBooks);
router.post("/", booksController.createBook);
router.get("/:id", booksController.getBookById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
