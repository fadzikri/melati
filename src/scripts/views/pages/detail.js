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
    const contentDetail = document.getElementById("content");

    contentDetail.classList.remove("content");
    contentDetail.classList.add("content-detail");

    hamburger.setAttribute(
      "href",
      `${window.location.origin}/#/detail/${datas.id}`
    );

    process.changeTitleToDetail(
      "Deskripsi Restoran",
      "Penjelasan lengkap mengenai restoran ini"
    );

    process.skipContent();

    if (!datas) {
      content.classList.add("detail");

      return (content.innerHTML = `
        <restaurant-detail class="detail" tabindex="0">
          <div class="skeleton-image skeleton-image-detail">
            <p>Memuat...</p>
          </div>
          <hr>
          <div>
            <p>Nama : Memuat...</p>
            <p>Rating : Memuat...</p>
            <p>Deskripsi: Memuat...</p>
            <p>Alamat : Memuat...</p>
            <p>Lokasi : Memuat...</p>
            <p>Kategori : Memuat...</p>
            <p>Menu : Memuat...</p>
            <p>Customer Review : Memuat...</p>
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
