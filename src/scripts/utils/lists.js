/* eslint-disable no-unused-expressions */
import config from "../global/config";
import {
  RestaurantCard,
  RestaurantDescription,
  RestaurantImage,
} from "../views/templates/content-restaurant";
import process from "./process";

const lists = {
  async render(data) {
    const card = new RestaurantCard();
    const image = new RestaurantImage();
    const description = new RestaurantDescription();

    process.skipContent();

    card.setAttribute("id", data.id);

    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        window.location.href = `${window.location.origin}/#/detail/${e.target.id}`;
        e.stopPropagation();
        e.preventDefault();
      }
    });

    card.addEventListener("click", (e) => {
      window.location.href = `${window.location.origin}/#/detail/${e.target.id}`;
      e.stopPropagation();
      e.preventDefault();
    });

    image.setAttribute("src", `${config.BASE_IMAGE_URL}/${data.pictureId}`);
    image.setAttribute("id", data.id);
    image.setAttribute("name", data.name);
    description.setAttribute("name", data.name);
    description.setAttribute("rate", data.rating);
    description.setAttribute("city", data.city);
    description.setAttribute("id", data.id);

    card.append(image);
    card.append(description);

    return card;
  },
};

export default lists;
