import operationDb from "../src/scripts/data/dbi";
import { likeButton, dataRestaurant } from "../src/scripts/utils/like-button";
import { RestaurantLike } from "../src/scripts/views/templates/content-detail";

describe("Menyukai Restoran -->", () => {
  const initLikeButton = () => {
    const likeButton = new RestaurantLike();

    document.body.innerHTML = `<restaurant-like>${likeButton.innerHTML}</restaurant-like>`;
  };

  beforeEach(() => {
    initLikeButton();
  });

  it("Element suka masih dalam keadaan tidak suka", () => {
    // feather-heart-x ini untuk membuat jadi hati penuh / suka
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

    // Ketika sudah suka, nanti akan ada kelas feather-heart-x
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

    // Coba operasi database
    await operationDb.putRestaurant(dataRestaurant(data));

    const dataIdb = await operationDb.getRestaurant(data.id);

    expect(dataIdb.id).toEqual(data.id);

    // Hapus lagi biar tidak ganggun proses lain
    await operationDb.delRestaurant(dataIdb.id);
  });
});
