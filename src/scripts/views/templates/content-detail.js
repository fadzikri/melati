class RestaurantDetail {
  constructor({ datas, image, categories, menus, review }) {
    this._id = datas.id;
    this._image = image;
    this._name = datas.name;
    this._description = datas.description;
    this._city = datas.city;
    this._address = datas.address;
    this._categories = categories;
    this._menus = menus;
    this._rating = datas.rating;
    this._customerReviews = review;

    this._renderDetail();
  }

  _renderDetail() {
    const detailElement = new RestaurantDetailElement();

    detailElement.classList.add("detail");
    detailElement.setAttribute("tabindex", "0");

    detailElement.innerHTML = `
      <img src="${this._image}" width="100%">
      <hr>
      <div>
          <p>Nama : ${this._name}</p>
          <p>Rating : ${this._rating} / 5.0</p>
          <p>Deskripsi: ${this._description}</p>
          <p>Alamat : ${this._address}</p>
          <p>Lokasi : Kota ${this._city}</p>
          <p>Kategori : ${this._categories.innerHTML}</p>
          <p>Menu : ${this._menus.innerHTML}</p>
          <p>Customer Review :</p>
          </div>
          `;

    detailElement.append(this._customerReviews);

    detailElement.innerHTML += `
      <hr class="hr-review">
      <form class="input-review">
        <input id="input-name" class="input-name" placeholder="Namamu" required>
        <textarea id="input-text" placeholder="Berikan Reviewmu disini!" required></textarea>
        <button id="${this._id}" class="input-btn">Kirim</button>
      </form>
    `;

    return detailElement;
  }
}

class RestaurantDetailElement extends HTMLElement {}

class RestaurantDetailReview extends HTMLElement {}

customElements.define("restaurant-detail", RestaurantDetailElement);
customElements.define("restaurant-review", RestaurantDetailReview);

export default RestaurantDetail;
