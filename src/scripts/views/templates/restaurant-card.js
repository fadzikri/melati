import { restaurantLogic } from "../../utils/card-logic";

class RestaurantCard extends HTMLElement {
  connectedCallback() {
    return this._render();
  }

  _render() {
    return (this.innerHTML = `
            <div class="card" tabindex="0">
            <div>
        `);
  }
}

class RestaurantImage extends HTMLElement {
  connectedCallback() {
    this._src = this.getAttribute("src") || null;
    this._id = this.getAttribute("14") || null;

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
  connectedCallback() {
    this._name = this.getAttribute("name") || null;
    this._rate = this.getAttribute("rate") || null;
    this._city = this.getAttribute("city") || null;

    return restaurantLogic({
      status: this._name,
      render: this._renderWithDescription(),
      skeleton: this._renderSkeletonDescription(),
    });
  }

  _renderWithDescription() {
    this.innerHTML = `
        <p>Nama : ${this._name}</p>
        <p>Rating : ${this._rating} / 5.0</p>
        <p>Lokasi : Kota ${this._city}</p>
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

export { RestaurantCard, RestaurantImage, RestaurantDescription };
