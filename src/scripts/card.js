const data = require("../DATA.json");

let cards = document.getElementById("cards");

data.restaurants.forEach((x) => {
    cards.innerHTML += `
        <div class="card">
            <img src=${x.pictureId} alt="${x.name}" width="100%">
            <p>Rating : ${x.rating} / 5</p>
            <p>Nama : ${x.name}</p>
            <p>Lokasi : Kota ${x.city}</p>
        </div>
    `;
});