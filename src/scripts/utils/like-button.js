import operationDb from "../data/dbi";

const likeButton = async (data) => {
  const like = document.getElementById("like");
  const love = document.getElementsByClassName("fa")[0];

  like.addEventListener("click", async (e) => {
    e.stopPropagation();

    love.classList.toggle("fa-heart-o");

    if (love.classList.contains("fa-heart-o")) {
      await operationDb.delRestaurant(data.id);
    } else {
      await operationDb.putRestaurant(dataRestaurant(data));
    }
  });
};

const dataRestaurant = (data) => {
  return {
    id: data.id,
    image: data.pictureId,
    name: data.name,
    rate: data.rating,
    city: data.city,
  };
};

export default likeButton;
