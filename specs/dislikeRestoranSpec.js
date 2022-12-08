const { default: operationDb } = require("../src/scripts/data/dbi");
const {
  likeButton,
  dataRestaurant,
} = require("../src/scripts/utils/like-button");
const {
  RestaurantLike,
} = require("../src/scripts/views/templates/content-detail");

describe("Batal Menyukai Restoran -->", () => {
  const initLikeButton = () => {
    const likeButton = new RestaurantLike();
    document.body.innerHTML = `<restaurant-like>${likeButton.innerHTML}</restaurant-like>`;
  };

  const createLikedRestaurant = async () => {
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

    expect(hatiSvg).not.toHaveClass("feather-heart-x");
  });

  it("Data suka di database sudah kosong", async () => {
    await operationDb.delRestaurant("rqdv5juczeskfw1e867");

    expect(await operationDb.getRestaurant("rqdv5juczeskfw1e867")).toBeFalsy();
  });
});
