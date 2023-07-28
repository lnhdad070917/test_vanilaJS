import RestaurantData from "../global/data/restaurant-data.js";
import UrlParser from "../routes/url-parser.js";
import { CreateDetailRestaurant } from "../templates/template.js";

const Detail = {
  async render() {
    return `
      <section class="detail-restaurant container text-center bg-primary"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.detailRestaurant(url.id);
    const detailRestaurant = document.querySelector(".detail-restaurant");
    // console.log(restaurant);
    detailRestaurant.innerHTML = CreateDetailRestaurant(restaurant);

    const formReview = document.querySelector("#formReview");
    formReview.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = document.querySelector("#nameInput").value;
      const reviewInput = document.querySelector("#reviewInput").value;
      const dataInput = {
        id: url.id,
        name: nameInput,
        review: reviewInput,
      };
      console.log(dataInput);
      RestaurantData.postCustomerReviews(dataInput);
    });
  },
};

export default Detail;
