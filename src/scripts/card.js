class CardRestr extends HTMLElement {
    constructor(gambar, rate, nama, kota, desc) {
        this.gambar = gambar;
        this.rate = rate;
        this.nama = nama;
        this.kota = kota;
        this.desc = desc;
    }

    connectedCallback() {
        this.innerHTML = `
            <img src=${this.gambar} class="card-img" id="card-img">
            <p class="card-rate" id="card-rate">${this.rate}</p>
            <p class="card-nama" id="card-nama">${this.nama}</p>
            <p class="card-kota" id="card-kota">${this.kota}</p>
            <p class="card-desc" id="card-desc">${this.desc}</p>
        `;
    }
}

customElements.define('card-restr', CardRestr);
console.log(__filename);