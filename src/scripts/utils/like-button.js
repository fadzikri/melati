const likeButton = () => {
  const like = document.getElementById("like");
  const love = document.getElementsByClassName("fa")[0];

  like.addEventListener("click", (e) => {
    e.stopPropagation();
    love.classList.toggle("fa-heart-o");
  });
};

export default likeButton;
