import ListDatas from "../data/list-datas";
import card from "../views/pages/card";

const lists = {
  async render(content) {
    const datas = await ListDatas.datas();
    const container = content;

    container.innerHTML = "";

    datas.forEach(async (data) => {
      container.append(await card.render(data));
    });
  },
};

export default lists;
