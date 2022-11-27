/* eslint-disable prefer-const */
/* eslint-disable n/handle-callback-err */
import axios from "axios";
import config from "../global/config";

const reviewSend = () => {
  const buttonReview = document.getElementsByClassName("input-btn")[0];

  buttonReview.addEventListener("click", (e) => {
    let name = document.getElementById("input-name");
    let review = document.getElementById("input-text");
    const cleanText = review.value.replace(/\n|\r/g, "<br>");

    const id = e.target.id;
    const payload = { id, name: name.value, review: cleanText };

    name.value = "";
    review.value = "";

    axios
      .post(`${config.BASE_DATA_URL}/review`, payload)
      .then(async (res) => {
        const { customerReviews } = res.data;

        return await createReviewAfterPost(customerReviews);
      })
      .catch((err) => false);
  });
};

const createReviewAfterPost = async (data) => {
  const containerReview = document.getElementsByTagName("restaurant-review")[0];
  containerReview.innerHTML = "";

  data.forEach((rev) => {
    const div = document.createElement("div");
    div.classList.add("review");
    div.setAttribute("tabindex", "0");

    div.innerHTML = `
      <div class="review-header">
        <p>${rev.name}</p>
        <p>${rev.date}</p>
      </div>
      <div class="review-body">
        <p>${rev.review}</p>
      </div>
    `;

    containerReview.append(div);
  });
};

export default reviewSend;
