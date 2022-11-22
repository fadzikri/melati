/* eslint-disable no-unused-expressions */
class RestaurantCard extends HTMLElement {
  connectedCallback() {
    this.setAttribute("tabindex", "0");
    this.classList.add("card");
  }
}

class RestaurantImage extends HTMLElement {
  constructor(src) {
    super();
    this._src = src || null;

    this._src ? this._renderWithImage() : this._renderWithNoImage();
  }

  _renderWithImage() {
    this.innerHTML = `
        <img src="${this._src}" width="100%">
    `;
  }

  _renderWithNoImage() {
    this.innerHTML = `
      <div class="skeleton-image">
        <restaurant-text>Memuat...<restaurant-text>
      </div>
    `;
  }
}

class RestaurantDescription extends HTMLElement {
  constructor({ name, rate, city }) {
    super();
    this._name = name || null;
    this._rate = rate || null;
    this._city = city || null;

    this._name
      ? this._renderWithDescription()
      : this._renderWithNoDescription();
  }

  _renderWithDescription() {
    this.innerHTML = `
        <restaurant-text>Nama : ${this._name}<restaurant-text>
        <restaurant-text>Rating : ${this._rate} / 5.0<restaurant-text>
        <restaurant-text>Lokasi : ${this._city}<restaurant-text>
    `;
  }

  _renderWithNoDescription() {
    this.innerHTML = `
        <restaurant-text>Nama : Memuat...<restaurant-text>
        <restaurant-text>Rating : Memuat... / 5.0<restaurant-text>
        <restaurant-text>Lokasi : Memuat...<restaurant-text>
    `;
  }
}

class RestaurantText extends HTMLElement {}

customElements.define("restaurant-card", RestaurantCard);
customElements.define("restaurant-image", RestaurantImage);
customElements.define("restaurant-description", RestaurantDescription);
customElements.define("restaurant-text", RestaurantText);

export { RestaurantCard, RestaurantImage, RestaurantDescription };
