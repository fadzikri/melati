import config from "../../global/config";
import {
  RestaurantCard,
  RestaurantDescription,
  RestaurantImage,
} from "../templates/restaurant-card";

const createCard = (data) => {
  const card = new RestaurantCard();
  const image = new RestaurantImage();
  const description = new RestaurantDescription();

  image.setAttribute("src", `${config.BASE_IMAGE_URL}/${data.pictureId}`);
  description.setAttribute("name", data.name);
  description.setAttribute("rate", data.rating);
  description.setAttribute("city", data.city);

  card.append(image);
  card.append(description);

  return card;
};

export default createCard;
