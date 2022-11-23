class RestaurantDetail {
  constructor({ datas, image, categories, menus }) {
    this._image = image;
    this._name = datas.name;
    this._description = datas.description;
    this._city = datas.city;
    this._address = datas.address;
    this._categories = categories;
    this._menus = menus;
    this._rating = datas.rating;
    this._customerReviews = datas.customerReviews;

    console.log(this._customerReviews);

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
          <p>Review : ${this._customerReviews.innerHTML}</p>
      </div>
    `;

    return detailElement;
  }
}

class RestaurantDetailElement extends HTMLElement {}

customElements.define("restaurant-detail", RestaurantDetailElement);

export default RestaurantDetail;
