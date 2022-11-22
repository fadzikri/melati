import config from "../../global/config";
import {
  RestaurantCard,
  RestaurantDescription,
  RestaurantImage,
} from "../templates/restaurant-card";

const createCard = (data) => {
  const card = new RestaurantCard();
  const image = new RestaurantImage({
    src: `${config.BASE_IMAGE_URL}/${data.pictureId}`,
  });
  const description = new RestaurantDescription({
    name: data.name,
    rate: data.rating,
    city: data.city,
  });

  card.append(image);
  card.append(description);

  return card;
};

export default createCard;
