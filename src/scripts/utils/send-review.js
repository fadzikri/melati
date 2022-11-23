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
      .then((res) => true)
      .catch((err) => false);
  });
};

export default reviewSend;
