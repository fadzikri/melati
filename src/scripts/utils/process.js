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
    const containerDetail = document.createElement(
      "restaurant-detail-container"
    );
    const comments = document.createElement("restaurant-review");

    containerDetail.classList.add("detail");

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
    containerDetail.append(comments);

    return containerDetail;
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

  hrefToInitial() {
    const hamburger = document.getElementById("hamburger");

    hamburger.setAttribute("href", `${window.location.origin}#`);
  },

  skipContent() {
    const skip = document.getElementsByClassName("skip")[0];
    skip.setAttribute("href", `${window.location.hash}`);

    const idRestoran = document.getElementById("restoran");
    const hashRemove = window.location.hash.replace("#", "");
    idRestoran.setAttribute("id", `${hashRemove}`);

    skip.addEventListener("click", () => {
      this.changeClassDetail();
    });
  },

  changeClassDetail() {
    const idContent = document.getElementById("content");
    // const detailContent = document;
    idContent.classList.remove("content");
  },
};

export default process;
