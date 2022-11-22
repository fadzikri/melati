const data = require("../DATA.json");

const cards = document.getElementById("cards");

data.restaurants.forEach((x) => {
  cards.innerHTML += `
    <div class="card" tabindex="0">
      <img src=${x.pictureId} alt="" width="100%">
        <p>Nama : ${x.name}</p>
        <p>Rating : ${x.rating} / 5.0</p>
        <p>Lokasi : Kota ${x.city}</p>
    </div>
  `;
});
