import operationDb from "../src/scripts/data/dbi";
import { likeButton, dataRestaurant } from "../src/scripts/utils/like-button";
import { RestaurantLike } from "../src/scripts/views/templates/content-detail";

describe("Batal Menyukai Restoran -->", () => {
  const initLikeButton = () => {
    const likeButton = new RestaurantLike();
    document.body.innerHTML = `<restaurant-like>${likeButton.innerHTML}</restaurant-like>`;
  };

  const createLikedRestaurant = async () => {
    // Kan tidak disukai, bearti awalnya data suka harus ada
    await operationDb.putRestaurant(
      dataRestaurant({
        id: "rqdv5juczeskfw1e867",
        name: "Melting Pot",
        pictureId: "14",
        city: "Medan",
        rating: 4.2,
      })
    );
  };

  beforeEach(() => {
    initLikeButton();
    createLikedRestaurant();
  });

  it("Cek data yang sudah menyukai di database", async () => {
    const dataIdb = await operationDb.getRestaurant("rqdv5juczeskfw1e867");

    // Cek didatabase, apakah ada data suka?
    expect(dataIdb.id).toEqual("rqdv5juczeskfw1e867");

    await operationDb.delRestaurant(dataIdb.id);
  });

  it("Elemen tidak disukai pengguna", async () => {
    const elemenSuka = document.getElementsByTagName("restaurant-like")[0];
    const hatiSvg = document.getElementsByClassName("feather-heart")[0];
    const data = {
      id: "rqdv5juczeskfw1e867",
      name: "Melting Pot",
      pictureId: "14",
      city: "Medan",
      rating: 4.2,
    };

    await likeButton({
      data,
      like: elemenSuka,
      love: hatiSvg,
    });

    elemenSuka.dispatchEvent(new Event("click"));

    // Harusnya feather-heart-x tidak ada kalau habis batalin suka
    expect(hatiSvg).not.toHaveClass("feather-heart-x");
  });

  it("Data suka di database sudah kosong", async () => {
    await operationDb.delRestaurant("rqdv5juczeskfw1e867");

    // Data sudah kosong, dan itu benar
    expect(await operationDb.getRestaurant("rqdv5juczeskfw1e867")).toBeFalsy();
  });
});
