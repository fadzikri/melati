import operationDb from "../../data/dbi";
import lists from "../../utils/lists";

const favourite = {
  async render(content, param) {
    const datas = await operationDb.getAllRestaurants();
    const container = content;

    if (datas) {
      container.innerHTML = "";
    }

    datas.forEach(async (data) => {
      container.append(await lists.render(data));
    });
  },
};

export default favourite;
