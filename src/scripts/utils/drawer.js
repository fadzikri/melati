const drawer = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("navbar-open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("navbar-open");
  },
};

export default drawer;
