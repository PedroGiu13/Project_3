const express = require("express");
const { getReviewList, addReviewList } = require("./review.controller");
const router = express.Router();

router.get("/", getReviewList);
router.post("/", addReviewList);

module.exports = router;
