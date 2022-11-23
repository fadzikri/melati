import ListDatas from "../../data/list-datas";
import config from "../../global/config";
import likeButton from "../../utils/like-button";
import process from "../../utils/process";
import reviewSend from "../../utils/send-review";
import { RestaurantDetail } from "../templates/content-detail";

const detail = {
  async render(content, idDetail) {
    content.innerHTML = "";

    const datas = await ListDatas.datas(`detail/${idDetail}`);
    const image = `${config.BASE_IMAGE_URL}/${datas.pictureId}`;
    const categories = process.category(datas.categories);
    const menus = process.menu(datas.menus);
    const review = process.review(datas.customerReviews);
    const hamburger = document.getElementById("hamburger");
    const show = new RestaurantDetail({
      datas,
      image,
      categories,
      menus,
      review,
    });

    hamburger.setAttribute(
      "href",
      `${window.location.origin}/#/detail/${datas.id}`
    );

    process.changeTitleToDetail();
    process.cssContentDetail();

    content.append(show._renderDetail());

    reviewSend();
    likeButton();
  },
};

export default detail;
