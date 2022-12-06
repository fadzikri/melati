/* eslint-disable n/handle-callback-err */
import axios from "axios";

const fallbackImg = () => {
  const resImg = document.getElementsByClassName("res-img");
  axios
    .get(`${window.location.origin}/images/heros/hero-image-small.jpg`)
    .then((res) => true)
    .catch((err) => {
      [...resImg].forEach((el) => {
        el.remove();
      });
    });
};

export default fallbackImg;
