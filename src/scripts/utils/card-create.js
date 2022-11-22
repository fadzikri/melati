import axios from "axios";
import config from "../global/config";

const restaurantData = {
  data: {
    id: this._id,
    name: this._name,
    description: this._description,
    pictureId: this._pictureId,
    picture: this._picture,
    city: this._city,
    rating: this._rating,
  },

  _createList() {
    this._id = null;
    this._name = null;
    this._description = null;
    this._pictureId = null;
    this._picture = null;
    this._city = null;
    this._rating = null;

    this._getList();
  },

  getList() {
    axios.get(`${config.BASE_DATA_URL}/list`).then((lists) => {
      lists.data.restaurants.forEach((list) => {
        this._id = list.id;
        this._name = list.name;
        this._description = list.description;
        this._pictureId = list.pictureId;
        this._picture = `${config.BASE_IMAGE_URL}/${this._pictureId}`;
        this._city = list.city;
        this._rating = list.rating;
      });
    });
  },
};
