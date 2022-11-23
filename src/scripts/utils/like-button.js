import operationDb from "../data/dbi";

const likeButton = async (data) => {
  const like = document.getElementById("like");
  const love = document.getElementsByClassName("fa")[0];

  if (await operationDb.getRestaurant(data.id)) {
    console.log("a");
    return like.classList.remove("fa-heart-o");
  }

  like.addEventListener("click", async (e) => {
    e.stopPropagation();

    love.classList.toggle("fa-heart-o");

    if (love.classList.contains("fa-heart-o")) {
      operationDb.delRestaurant(data.id);
    } else {
      operationDb.putRestaurant(dataRestaurant(data));
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
