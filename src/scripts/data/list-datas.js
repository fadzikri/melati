/* eslint-disable no-useless-return */
/* eslint-disable n/handle-callback-err */
import axios from "axios";
import config from "../global/config";

class ListDatas {
  static async datas() {
    const response = await axios
      .get(`${config.BASE_DATA_URL}/list`)
      .then((res) => res.data.restaurants)
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          return console.log("Masalah Jaringan!");
        }
      });
    return response;
  }
}

export default ListDatas;
