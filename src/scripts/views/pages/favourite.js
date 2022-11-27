import operationDb from "../../data/dbi";
import lists from "../../utils/lists";
import process from "../../utils/process";

const favourite = {
  async render(content, param) {
    const datas = await operationDb.getAllRestaurants();
    const favorite = document.getElementById("favorite");
    const hamburger = document.getElementById("hamburger");
    const favoriteLi = document.getElementById("favorite-li");
    const container = content;

    favorite.addEventListener("click", (e) => {
      const locFav = `${window.location.origin}/#/favourite`;

      hamburger.setAttribute("href", locFav);
      favoriteLi.setAttribute("href", locFav);

      process.changeClassContentToNormal();
      e.preventDefault();
      e.stopPropagation();
    });

    hamburger.addEventListener("click", (e) => {
      const locFav = `${window.location.origin}/#/favourite`;

      hamburger.setAttribute("href", locFav);
      favoriteLi.setAttribute("href", locFav);

      process.changeClassContentToNormal();
      e.stopPropagation();
      e.preventDefault();
    });

    favorite.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const locFav = `${window.location.origin}/#/favourite`;

        hamburger.setAttribute("href", locFav);
        favoriteLi.setAttribute("href", locFav);

        process.changeClassContentToNormal();
        e.stopPropagation();
      }
    });

    hamburger.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const locFav = `${window.location.origin}/#/favourite`;

        hamburger.setAttribute("href", locFav);
        favoriteLi.setAttribute("href", locFav);

        process.changeClassContentToNormal();
        e.stopPropagation();
        e.preventDefault();
      }
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
