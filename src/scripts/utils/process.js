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

  changeTitleToDetail() {
    const judul = document.getElementById("judul-daftar");
    const deskripsi = document.getElementById("deskripsi-daftar");

    judul.innerHTML = "Deskripsi Restoran";
    deskripsi.innerHTML = "Penjelasan lengkap mengenai restoran ini";
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
};

export default process;
