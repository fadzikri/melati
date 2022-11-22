import ListDatas from "../../data/list-datas";
import RestaurantDetail from "../templates/content-detail";

const detail = {
  async render(idDetail) {
    const datas = await ListDatas.datas(`detail/${idDetail}`);

    const show = new RestaurantDetail({ datas , catagories, menus });
  },
};

export default detail;