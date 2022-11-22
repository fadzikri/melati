import axios from "axios";
import config from "../global/config";
import {
  RestaurantCard,
  RestaurantDescription,
  RestaurantImage,
} from "../views/templates/restaurant-card";

axios.get(`${config.BASE_DATA_URL}/list`).then((lists) => {
  const cards = document.getElementById("cards");
  lists.data.restaurants.forEach((list) => {
    const card = new RestaurantCard();
    const image = new RestaurantImage(
      `${config.BASE_IMAGE_URL}/${list.pictureId}`
    );
    const description = new RestaurantDescription({
      name: list.name,
      rate: list.rating,
      city: list.city,
    });

    card.append(image);
    card.append(description);
    cards.append(card);
  });
});
