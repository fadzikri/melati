/* eslint-disable no-new-wrappers */
const process = {
  category(datas) {
    const result = document.createElement("ul");
    let subresult = new String();

    datas.forEach((data) => {
      subresult += `<li>${data.name}</li>`;
    });

    result.append(subresult);
    return result;
  },

  menu(datas) {
    const result = document.createElement("ul");
    let subresult = new String();

    for (const property in datas) {
      const foodrink = document.createElement("ul");
      let subfoodrink = new String();

      datas[property].forEach((data) => {
        subfoodrink += `<li>${data.name}</li>`;
      });

      foodrink.append(subfoodrink);
      subresult += foodrink;
    }

    result.append(subresult);
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
