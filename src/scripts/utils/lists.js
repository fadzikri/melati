import config from "../global/config";
import {
  RestaurantCard,
  RestaurantDescription,
  RestaurantImage,
} from "../views/templates/content-restaurant";

const lists = {
  async render(data) {
    const card = new RestaurantCard();
    const image = new RestaurantImage();
    const description = new RestaurantDescription();

    card.setAttribute("id", data.id);

    card.addEventListener("click", (e) => {
      window.location.href = `${window.location.origin}/#/detail/${e.target.id}`;
    });

    image.setAttribute("src", `${config.BASE_IMAGE_URL}/${data.pictureId}`);
    image.setAttribute("id", data.id);
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
