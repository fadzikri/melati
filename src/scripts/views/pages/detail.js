import ListDatas from "../../data/list-datas";
import config from "../../global/config";
import process from "../../utils/process";
import RestaurantDetail from "../templates/content-detail";

const detail = {
  async render(content, idDetail) {
    content.innerHTML = "";

    const datas = await ListDatas.datas(`detail/${idDetail}`);
    const image = `${config.BASE_IMAGE_URL}/${datas.pictureId}`;
    const categories = process.category(datas.categories);
    const menus = process.menu(datas.menus);
    const show = new RestaurantDetail({ datas, image, categories, menus });

    process.changeTitletoDetail();
    process.cssDetail();

    content.append(show._renderDetail());
  },
};

export default detail;
