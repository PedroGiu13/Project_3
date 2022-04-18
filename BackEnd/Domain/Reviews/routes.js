const express = require("express");
const router = express.Router();

let reviewList = require("./review-db");

const getClientList = (req, res) => {
  res.send(reviewList);
};

const addClientList = (req, res) => {
  let newReview = req.body;
  reviewList.push(newReview);
  res.send(newReview);
};

router.get("/", getClientList);
router.post("/", addClientList);

module.exports = router;
