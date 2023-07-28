import RestaurantData from "../global/data/restaurant-data";
import { CreateDataRestaurant } from "../templates/template";

const Home = {
  async render() {
    return `
        <section class="restaurant" id="mainContent">
          <h2>Daftar Restaurant</h2>
          <div class="restaurant-container d-flex flex-wrap gap-2"></div>
        </section>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector(".restaurant-container");
    const restaurants = await RestaurantData.restaurantList();
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += CreateDataRestaurant(restaurant);
    });
  },
};

export default Home;
