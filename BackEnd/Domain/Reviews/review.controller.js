const Reviews = require('./review')

const getReviewList = async (req, res) => {
    const reviewsList = await Reviews.findAll()
    console.log(reviewsList)
    res.send(reviewsList)
  };
  

const addReviewList = async (req, res) => {   
    const {id, name, lastName, rating, comment} = req.body
    
    const newReview = await Reviews.create({
            id: id,
            first_name: name,
            last_name: lastName,
            calification: rating,
            comment: comment
        })
       
    console.log(newReview);
    res.send(newReview);
}
  
module.exports = {getReviewList, addReviewList}
