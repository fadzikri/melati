import ListDatas from "../data/list-datas";
import createCard from "../views/pages/home-card";

const lists = {
  async render(content) {
    const datas = await ListDatas.datas();
    const container = content;

    container.innerHTML = "";

    datas.forEach((data) => {
      container.append(createCard(data));
    });
  },
};

export default lists;
