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
    const hamburger = document.getElementById("hamburger");

    hamburger.setAttribute(
      "href",
      `${window.location.origin}/#/detail/${datas.id}`
    );

    process.skipContent();

    process.changeTitleToDetail(
      "Deskripsi Restoran",
      "Penjelasan lengkap mengenai restoran ini"
    );

    process.changeClassContentToDetail();

    if (!datas) {
      content.classList.add("detail");

      return (content.innerHTML = `
        <restaurant-detail class="detail">
          <div class="skeleton-image skeleton-image-detail" tabindex="0">
            <p>Memuat...</p>
          </div>
          <hr>
          <div>
            <p tabindex="0">Nama : Memuat...</p>
            <p tabindex="0">Rating : Memuat...</p>
            <p tabindex="0">Deskripsi: Memuat...</p>
            <p tabindex="0">Alamat : Memuat...</p>
            <p tabindex="0">Lokasi : Memuat...</p>
            <p tabindex="0">Kategori : Memuat...</p>
            <p tabindex="0">Menu : Memuat...</p>
            <p tabindex="0">Customer Review : Memuat...</p>
          </div>
        </restaurant-detail>
      `);
    }

    const categories = process.category(datas.categories);
    const menus = process.menu(datas.menus);
    const review = process.review(datas.customerReviews);
    const show = new RestaurantDetail({
      datas,
      image,
      categories,
      menus,
      review,
    });

    content.append(show._renderDetail());

    reviewSend();
    likeButton(datas);
  },
};

export default detail;
