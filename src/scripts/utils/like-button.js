import operationDb from "../data/dbi";

const likeButton = async (data) => {
  const like = document.getElementById("like");
  const love = document.getElementsByClassName("feather-heart")[0];

  if (await operationDb.getRestaurant(data.id)) {
    love.classList.add("feather-heart-x");
  }

  like.addEventListener("click", async (e) => {
    await toogleLikeHeart(love, e, data);
  });

  like.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      await toogleLikeHeart(love, e, data);
    }
  });
};

const toogleLikeHeart = async (love, e, data) => {
  e.stopPropagation();
  e.preventDefault();

  love.classList.toggle("feather-heart-x");

  if (!love.classList.contains("feather-heart-x")) {
    await operationDb.delRestaurant(data.id);
  } else {
    await operationDb.putRestaurant(dataRestaurant(data));
  }
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
