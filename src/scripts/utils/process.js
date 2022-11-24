/* eslint-disable no-new-wrappers */
const process = {
  category(datas) {
    const result = document.createElement("ul");

    datas.forEach((data) => {
      const list = document.createElement("li");
      list.innerHTML = data.name;
      result.append(list);
    });

    return result;
  },

  menu(datas) {
    const result = document.createElement("ul");

    for (const property in datas) {
      datas[property].forEach((data) => {
        const list = document.createElement("li");
        list.innerHTML = data.name;
        result.append(list);
      });
    }

    return result;
  },

  review(datas) {
    const comments = document.createElement("restaurant-review");

    datas.forEach((data) => {
      const containerReview = document.createElement("div");
      containerReview.classList.add("review");
      containerReview.innerHTML = `
        <div class="review-header">
          <p>${data.name}</p>
          <p>${data.date}</p>
        </div>
        <div class="review-body">
          <p>${data.review}</p>
        </div>
      `;

      comments.append(containerReview);
    });

    return comments;
  },

  changeTitleToDetail(judulText, deskripsiText) {
    const judul = document.getElementById("judul-daftar");
    const deskripsi = document.getElementById("deskripsi-daftar");

    judul.innerHTML = judulText;
    deskripsi.innerHTML = deskripsiText;
  },

  changeTitleToInitial() {
    const judul = document.getElementById("judul-daftar");
    const deskripsi = document.getElementById("deskripsi-daftar");

    judul.innerHTML = "Daftar Restoran";
    deskripsi.innerHTML = "Restoran yang berafiliasi dengan kami.";
  },

  cssContentDetail() {
    const content = document.getElementById("content");
    content.classList.add("detail");
  },

  cssContentInitial() {
    const content = document.getElementById("content");
    content.classList.remove("detail");
  },

  hrefToInitial() {
    const hamburger = document.getElementById("hamburger");

    hamburger.setAttribute("href", `${window.location.origin}#`);
  },
};

export default process;
