import axios from "axios";
import config from "../global/config";

class ListDatas {
  static async datas() {
    const response = await axios
      .get(`${config.BASE_DATA_URL}/list`)
      .then((res) => res.data.restaurants);

    return response;
  }
}

export default ListDatas;
