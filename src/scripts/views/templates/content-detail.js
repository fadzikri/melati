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
        <img class="lazy-skeleton lazyload" data-src="${this._image}" width="100%" alt="Foto untuk restoran ${this._name}" tabindex="0">
      </restaurant-detail-container>
      <hr>
      <restaurant-detail-container class="detail">
        <div>
            <p tabindex="0">Nama : ${this._name}</p>
            <p tabindex="0" class="rating-restaurant">Rating : ${this._rating} / 5.0</p>
            <p tabindex="0">Deskripsi: ${this._description}</p>
            <p tabindex="0">Alamat : ${this._address}</p>
            <p tabindex="0">Lokasi : Kota ${this._city}</p>
            <p tabindex="0">Kategori : <ul>${this._categories.innerHTML}</ul></p>
            <p tabindex="0">Menu : <ul>${this._menus.innerHTML}</ul></p>
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
        <restaurant-like class="like" id="like" tabindex="0"></restaurant-like>
      </restaurant-detail-container>
    `;

    return detailElement;
  }
}

class RestaurantDetailElement extends HTMLElement {}

class RestaurantDetailReview extends HTMLElement {}

class RestaurantLike extends HTMLElement {
  constructor() {
    super();

    this.connectedCallback();
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <svg aria-hidden="true" aria-label="like" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-heart feather-heart-o"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    `;
  }
}

class RestaurantDetailContainer extends HTMLElement {}

customElements.define("restaurant-detail-container", RestaurantDetailContainer);
customElements.define("restaurant-detail", RestaurantDetailElement);
customElements.define("restaurant-review", RestaurantDetailReview);
customElements.define("restaurant-like", RestaurantLike);

export { RestaurantDetail, RestaurantLike };
