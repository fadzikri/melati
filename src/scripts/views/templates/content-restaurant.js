class RestaurantCard extends HTMLElement {
  connectedCallback() {
    this.setAttribute("tabindex", "0");
    this.classList.add("card");
  }
}

class RestaurantImage extends HTMLElement {
  connectedCallback() {
    this._src = this.getAttribute("src") || null;
    this._name = this.getAttribute("name") || null;

    this._src ? this._renderWithImage() : this._renderWithNoImage();
  }

  _renderWithImage() {
    this.innerHTML = `
        <img src="${this._src}" id="${this._id}" width="100%" alt="Foto untuk restoran ${this._name}">
    `;
  }

  _renderWithNoImage() {
    this.innerHTML = `
        <div>
          <p>Memuat...</p>
        <div>
    `;
  }
}

class RestaurantDescription extends HTMLElement {
  connectedCallback() {
    this._name = this.getAttribute("name") || null;
    this._rate = this.getAttribute("rate") || null;
    this._city = this.getAttribute("city") || null;

    this._name
      ? this._renderWithDescription()
      : this._renderWithNoDescription();
  }

  _renderWithDescription() {
    this.innerHTML = `
        <p>Nama : ${this._name}</p>
        <p>Rating : ${this._rate} / 5.0</p>
        <p>Lokasi : Kota ${this._city}</p>
    `;
  }

  _renderWithNoDescription() {
    this.innerHTML = `
        <p>Nama : Memuat...</p>
        <p>Rating : Memuat...</p>
        <p>Lokasi : Memuat...</p>
    `;
  }
}

customElements.define("restaurant-card", RestaurantCard);
customElements.define("restaurant-image", RestaurantImage);
customElements.define("restaurant-description", RestaurantDescription);

export { RestaurantCard, RestaurantImage, RestaurantDescription };
