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

    detailElement.innerHTML = `
      <restaurant-detail-container class="detail">
        <img src="${this._image}" width="100%" alt="Foto untuk restoran ${this._name}" tabindex="0">
      </restaurant-detail-container>
      <hr>
      <restaurant-detail-container class="detail">
        <div>
            <p tabindex="0">Nama : ${this._name}</p>
            <p tabindex="0">Rating : ${this._rating} / 5.0</p>
            <p tabindex="0">Deskripsi: ${this._description}</p>
            <p tabindex="0">Alamat : ${this._address}</p>
            <p tabindex="0">Lokasi : Kota ${this._city}</p>
            <p tabindex="0">Kategori : ${this._categories.innerHTML}</p>
            <p tabindex="0">Menu : ${this._menus.innerHTML}</p>
            <p tabindex="0">Customer Review :</p>
        </div>
      </restaurant-detail-container>
    `;

    detailElement.append(this._customerReviews);

    detailElement.innerHTML += `
    <hr class="hr-review">
      <restaurant-detail-container class="detail">
        <form class="input-review" tabindex="0">
          <input id="input-name" class="input-name" placeholder="Namamu" required>
          <textarea id="input-text" placeholder="Berikan Reviewmu disini!" required></textarea>
          <button id="${this._id}" class="input-btn">Kirim</button>
        </form>
        <restaurant-like class="like" id="like" tabindex="0">
          <i class="fa fa-heart fa-heart-o" aria-hidden="true"></i>
        </restaurant-like>
      </restaurant-detail-container>
    `;

    return detailElement;
  }
}

class RestaurantDetailElement extends HTMLElement {}

class RestaurantDetailReview extends HTMLElement {}

class RestaurantLike extends HTMLElement {}

class RestaurantDetailContainer extends HTMLElement {}

customElements.define("restaurant-detail-container", RestaurantDetailContainer);
customElements.define("restaurant-detail", RestaurantDetailElement);
customElements.define("restaurant-review", RestaurantDetailReview);
customElements.define("restaurant-like", RestaurantLike);

export { RestaurantDetail };
