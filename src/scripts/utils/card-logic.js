const restaurantLogic = ({ status, render, skeleton }) => {
  if (status) {
    return render;
  } else {
    return skeleton;
  }
};

export default { restaurantLogic };
