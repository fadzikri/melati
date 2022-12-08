const { default: operationDb } = require("../src/scripts/data/dbi");
const {
  likeButton,
  dataRestaurant,
} = require("../src/scripts/utils/like-button");
const {
  RestaurantLike,
} = require("../src/scripts/views/templates/content-detail");

describe("Menyukai Restoran -->", () => {
  const initLikeButton = () => {
    const likeButton = new RestaurantLike();

    document.body.innerHTML = `<restaurant-like>${likeButton.innerHTML}</restaurant-like>`;
  };

  beforeEach(() => {
    initLikeButton();
  });

  it("Tampilkan Element Suka dalam keadaan tidak suka", () => {
    const elemenSuka = document.getElementsByClassName("feather-heart-x")[0];

    expect(elemenSuka).toBeFalsy();
  });

  it("Element disukai pengguna", async () => {
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

    expect(hatiSvg).toHaveClass("feather-heart-x");
  });

  it("Data suka masuk ke database", async () => {
    const data = {
      id: "rqdv5juczeskfw1e867",
      name: "Melting Pot",
      pictureId: "14",
      city: "Medan",
      rating: 4.2,
    };

    await operationDb.putRestaurant(dataRestaurant(data));

    const dataIdb = await operationDb.getRestaurant(data.id);

    expect(dataIdb.id).toEqual(data.id);

    await operationDb.delRestaurant(dataIdb.id);
  });
});
