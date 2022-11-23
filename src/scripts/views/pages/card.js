import ListDatas from "../../data/list-datas";
import lists from "../../utils/lists";

const card = {
  async render(content, param) {
    const datas = await ListDatas.datas("list");
    const container = content;

    if (datas) {
      container.innerHTML = "";
    }

    datas.forEach(async (data) => {
      container.append(await lists.render(data));
    });
  },
};

export default card;
