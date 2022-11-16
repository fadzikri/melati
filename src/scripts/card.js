const data = require("../DATA.json");

let cards = document.getElementById("cards");

data.restaurants.forEach((x) => {
    cards.innerHTML += `
        <div class="card">
            <img src=${x.pictureId} alt="${x.name}">
            <p>${x.rating}</p>
            <p>${x.name}</p>
            <p>${x.city}</p>
            <p>${x.description}</p>
        </div>
    `;
});