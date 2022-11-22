/* eslint-disable no-unused-expressions */
import restaurantLogic from "../../utils/card-logic";

class RestaurantCard extends HTMLElement {
  connectedCallback() {
    this.setAttribute("tabindex", "0");
    this.classList.add("card");
  }
}

class RestaurantImage extends HTMLElement {
  constructor(id, src) {
    super();
    this._id = id || null;
    this._src = src || null;

    return restaurantLogic({
      status: this._id,
      render: this._renderWithImage(),
      skeleton: this._renderSkeletonImage(),
    });
  }

  _renderWithImage() {
    this.innerHTML = `
        <img src="${this._src}" id="${this._id}" width="100%">
    `;
  }

  _renderSkeletonImage() {
    this.innerHTML = `
        <div class="skeleton-image">
            <p>Memuat....</p>
        </div>
    `;
  }
}

class RestaurantDescription extends HTMLElement {
  constructor({ id, name, rate, city }) {
    super();
    this._id = id || null;
    this._name = name || null;
    this._rate = rate || null;
    this._city = city || null;

    return restaurantLogic({
      status: this._id,
      render: this._renderWithDescription(),
      skeleton: this._renderSkeletonDescription(),
    });
  }

  _renderWithDescription() {
    this.innerHTML = `
        <p>Nama : ${this._name}</p>
        <p>Rating : ${this._rate} / 5.0</p>
        <p>Lokasi : ${this._city}</p>
    `;
  }

  _renderSkeletonDescription() {
    this.innerHTML = `
        <p>Nama : Memuat...</p>
        <p>Rating : Memuat... / 5.0</p>
        <p>Lokasi : Kota Memuat...</p>
    `;
  }
}

customElements.define("restaurant-card", RestaurantCard);
customElements.define("restaurant-image", RestaurantImage);
customElements.define("restaurant-description", RestaurantDescription);

export { RestaurantCard, RestaurantImage, RestaurantDescription };
