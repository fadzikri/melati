/* eslint-disable no-useless-return */
/* eslint-disable n/handle-callback-err */
import axios from "axios";
import config from "../global/config";

class ListDatas {
  static async datas(endpoint) {
    const response = await axios
      .get(`${config.BASE_DATA_URL}/${endpoint}`)
      .then((res) => {
        if (endpoint === "list") {
          return res.data.restaurants;
        } else {
          return res.data.restaurant;
        }
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          return console.log("Masalah Jaringan!");
        }
      });
    return response;
  }
}

export default ListDatas;
