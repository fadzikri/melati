import operationDb from "../data/dbi";

const likeButton = async (data) => {
  const like = document.getElementById("like");
  const love = document.getElementsByClassName("fa")[0];

  if (await operationDb.getRestaurant(data.id)) {
    love.classList.remove("fa-heart-o");
  }

  like.addEventListener("click", async (e) => {
    e.stopPropagation();
    e.preventDefault();

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
    pictureId: data.pictureId,
    name: data.name,
    rating: data.rating,
    city: data.city,
  };
};

export default likeButton;
