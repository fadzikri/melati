class RestaurantDetail {
  constructor(datas) {
    this._pictureId = datas.pictureId;
    this._name = datas.name;
    this._description = datas.description;
    this._city = datas.city;
    this._address = datas.address;
    this._categories = datas.categories;
    this._menus = datas.menus;
    this._rating = datas.rating;
    this._customerReviews = datas.customerReviews;

    this._renderDetail();
  }

  _renderDetail() {
    const detailElement = new RestaurantDetailElement();

    detailElement.classList.add("card");
    detailElement.setAttribute("tabindex", "0");

    detailElement.innerHTML = `
          <img src="${this._pictureId} alt="" width="100%">
          <div>
              <p>Nama : ${this._name}</p>
              <p>Rating : ${this._rating}</p>
              <p>Deskripsi: ${this._description}</p>
              <p>Alamat : ${this._address}</p>
              <p>Lokasi : ${this._city}</p>
              <p>Kategori : ${this._categories}</p>
              <p>Menu : ${this._menus}</p>
              <p>Review : ${this._customerReviews}</p>
          <div>
      `;
  }
}

class RestaurantDetailElement extends HTMLElement {}

customElements.define("restaurant-detail", RestaurantDetailElement);

export default RestaurantDetail;
