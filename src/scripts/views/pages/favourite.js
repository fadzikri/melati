import operationDb from "../../data/dbi";
import lists from "../../utils/lists";
import process from "../../utils/process";

const favourite = {
  async render(content, param) {
    const datas = await operationDb.getAllRestaurants();
    const favorite = document.getElementById("favorite");
    const container = content;

    favorite.addEventListener("click", () => {
      const locFav = `${window.location.origin}/#/favourite`;

      favorite.setAttribute("href", locFav);
      window.location.assign(locFav);
    });

    process.changeTitleToDetail(
      "Restoran Favoritku",
      "Daftar restoran yang aku sukai."
    );

    container.innerHTML = "";

    if (!datas.length) {
      container.innerHTML = `
      <restaurant-card>
      <restaurant-image class="skeleton-image"> </restaurant-image>
      <restaurant-description> </restaurant-description>
    </restaurant-card>
    <restaurant-card>
      <restaurant-image class="skeleton-image"> </restaurant-image>
      <restaurant-description> </restaurant-description>
    </restaurant-card>
    <restaurant-card>
      <restaurant-image class="skeleton-image"> </restaurant-image>
      <restaurant-description> </restaurant-description>
    </restaurant-card>
      `;
    }

    datas.forEach(async (data) => {
      container.append(await lists.render(data));
    });
  },
};

export default favourite;
