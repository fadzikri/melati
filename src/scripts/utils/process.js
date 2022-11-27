/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-return */
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
      containerReview.setAttribute("tabindex", "0");

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

  changeTitleTo({newTitle, newDescription }) {
    const elTitle = document.getElementById("judul-daftar");
    const elDescription = document.getElementById("deskripsi-daftar");
    
    setTimeout(() => {
      elTitle.innerHTML = newTitle
      elDescription.innerHTML = newDescription;
    }, 0); 
  },

  changeTitleToInitial() {
    const judul = document.getElementById("judul-daftar");
    const deskripsi = document.getElementById("deskripsi-daftar");

    judul.innerHTML = "Daftar Restoran";
    deskripsi.innerHTML = "Restoran yang berafiliasi dengan kami.";

    if ((window.location.hash).match(/detail/)) {
      this.changeTitleTo({
        newTitle: "Detail Restoran",
        newDescription: "Lengkap tentang restoran ini."
      });
    }
    
    if ((window.location.hash).match(/favourite/)) {
      this.changeTitleTo({
        newTitle: "Restoran Favourite",
        newDescription: "Restoran saya."
      });
    }
  },

  hrefToInitial() {
    const hamburger = document.getElementById("hamburger");

    hamburger.setAttribute("href", `${window.location.origin}#`);
  },

  skipContent() {
    const skip = document.getElementsByClassName("skip")[0];
    skip.setAttribute("href", `${window.location.hash}`);

    const hashRemove = window.location.hash.replace("#", "");

    const idRestoran = document.querySelectorAll("section")[1];

    idRestoran.setAttribute("id", `${hashRemove}`);

    if ((window.location.hash).match(/detail/)) {
      this.changeClassContentToDetail();
    } else  {
      this.changeClassContentToNormal();
    }
  },

  changeClassContentToNormal() {
    const idContent = document.getElementById("content");
    setTimeout(() => idContent.classList.remove("content-detail"), 0); 
    setTimeout(() => idContent.classList.add("content"), 2);

    if ((window.location.hash).match(/detail/)) {
      this.changeClassContentToDetail();
    }
  },

  changeClassContentToDetail() {
    const idContent = document.getElementById("content");
    setTimeout(() => idContent.classList.remove("content"), 0); 
    setTimeout(() => idContent.classList.add("content-detail"), 2);
  },

  changeIdSection() {
    const section = document.querySelectorAll("section")[1];
    const skip = document.getElementsByClassName("skip")[0];
    const hash = window.location.hash;
    

    if ((window.location.hash).match(/favourite/)) {
      skip.setAttribute("href", `${hash}`);
      section.setAttribute("id", `${hash.replace("#", "")}`);
    } else if ((window.location.hash).match(/detail/)) {
      skip.setAttribute("href", `${hash}`);
      section.setAttribute("id", `${hash.replace("#", "")}`);
    } else if  (!window.location.hash){
      skip.setAttribute("href", `#restoran`);
      section.setAttribute("id", "restoran");
    }
  },
};

export default process;
