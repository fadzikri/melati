/* eslint-disable no-new-wrappers */
const process = {
  category(datas) {
    const result = document.createElement("ul");
    let subresult = new String();

    datas.forEach((data) => {
      subresult += `<li>${data.name}</li>`;
    });

    result.append(subresult);
  },

  menu(datas) {
    const result = document.createElement("ul");
    let subresult = new String();

    datas.forEach((data) => {
      const foods = document.createElement("ul");
      let makanan = new String();

      data.forEach((food) => {
        makanan += `<li>${food.name}</li>`;
      });

      foods.append(makanan);

      subresult += `${foods}`;
    });

    result.append(subresult);
  },
};

export default process;
