class RestaurantCard extends HTMLElement {
  connectedCallback() {
    this.setAttribute("tabindex", "0");
    this.classList.add("card");
  }
}

class RestaurantImage {
  constructor({ src }) {
    this._src = src;

    this._renderWithImage();
  }

  _renderWithImage() {
    this.innerHTML = `
        <img src="${this._src}" width="100%">
    `;
  }
}

class RestaurantDescription {
  constructor({ name, rate, city }) {
    this._name = name;
    this._rate = rate;
    this._city = city;

    this._renderWithDescription();
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

export { RestaurantCard, RestaurantImage, RestaurantDescription };
