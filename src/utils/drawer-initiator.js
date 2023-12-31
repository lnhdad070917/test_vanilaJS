const DrawerInitiator = {
  init({ drawer, content }) {
    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("active");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("active");
  },
};

export default DrawerInitiator;
