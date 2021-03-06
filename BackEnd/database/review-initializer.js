const Reviews = require("../Domain/Reviews/review");

const reviewMigrate = () => {
  reviewList.forEach((element) => {
    Reviews.create(element);
  });
};

let reviewList = [
  {
    first_name: "Jack",
    last_name: "Nicholson",
    calification: "Excelente",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam accusamus! Dignissimos vel rem voluptatibus.",
  },
  {
    first_name: "Robert",
    last_name: "de Niro",
    calification: "Muy Bueno",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dignissimos libero ea, eius dolore maxime voluptate rerum!",
  },
  {
    first_name: "Tom",
    last_name: "Hanks",
    calification: "Excelente",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, dicta quidem fugit quisquam excepturi expedita neque! Nemo quae dicta eligendi.",
  },
];

module.exports = reviewMigrate;
