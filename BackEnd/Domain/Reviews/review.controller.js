const Reviews = require("./review");
const {errorHandler} = require("../../helpers/errorHandler");

const getReviewList = async (req, res) => {
  try {
    const reviewsList = await Reviews.findAll();
    res.send(reviewsList);
  } catch (e) {
    errorHandler(res, e);
  }
};

const addReviewList = async (req, res) => {
  try {
    const { name, lastName, rating, comment } = req.body;

    const newReview = await Reviews.create({
      first_name: name,
      last_name: lastName,
      calification: rating,
      comment: comment,
    });

    res.send(newReview);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports = { getReviewList, addReviewList };
