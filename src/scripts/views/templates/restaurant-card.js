class RestaurantCard extends HTMLElement {
  connectedCallback() {
    this.setAttribute("tabindex", "0");
    this.classList.add("card");
  }
}

class RestaurantImage extends HTMLElement {
  constructor({ src }) {
    super();
    this._src = src || null;

    this._src ? this._renderWithImage() : this._renderWithNoImage();
  }

  _renderWithImage() {
    this.innerHTML = `
        <img src="${this._src}" width="100%">
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
        <p>Nama : ${this._name}</p>
        <p>Rating : ${this._rate} / 5.0</p>
        <p>Lokasi : ${this._city}</p>
    `;
  }
}

customElements.define("restaurant-card", RestaurantCard);
customElements.define("restaurant-image", RestaurantImage);
customElements.define("restaurant-description", RestaurantDescription);

export { RestaurantCard, RestaurantImage, RestaurantDescription };
