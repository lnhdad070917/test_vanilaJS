import API_ENDPOINT from "./../global/api-endpoint";
import * as func from "./fraction-creator.js";

const CreateDataRestaurant = (restaurant) => `
  <div class="card restaurant-item" style="width: 18rem;">
  <img src="${API_ENDPOINT.IMAGE.MEDIUM(
    restaurant.pictureId
  )}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${restaurant.name}</h5>
    <p class="card-text">${restaurant.description}</p>
    <a href="${`#/detail/${restaurant.id}`}" aria-label="Detail ${
      restaurant.name
    }" class="btn btn-primary">Detail</a>
  </div>
</div>
`;

const CreateDetailRestaurant = (resto) => `
  <h2 >Detail Restaurant</h2>
  <div class="detail-restaurant-container">
    <img src="${API_ENDPOINT.IMAGE.MEDIUM(
      resto.pictureId
    )}" alt="Gambar Restaurant ${resto.name}" >
    <div class="detail-restaurant-content">
      <h3 >Nama : </h3>
      <p >${resto.name}</p>
      <h3 >Kota : </h3>
      <p >${resto.city}</p>
      <h3 >Alamat : </h3>
      <p >${resto.address}</p>
      <h3 >Rating : </h3>
      <p >${resto.rating} ${func.createRestaurantRatingStars(resto.rating)}</p>
      <h3 >Kategori : </h3>
      <p >${func.createRestaurantDetailCategories(resto).join(", ")}</p>
      <div class="detail-restaurant-content-menu">
        <div class="detail-restaurant-content-menu-food">
          <h3 >Makanan</h3>
          <ul>
            ${func.createRestaurantDetailMenus(resto, "foods")}
          </ul>
        </div>
        <div class="detail-restaurant-content-menu-drink">
          <h3 >Minuman</h3>
          <ul>
            ${func.createRestaurantDetailMenus(resto, "drinks")}
          </ul>
        </div>
      </div>
    </div>
    <div class="detail-restaurant-desc">
      <h3>Deskripsi</h3>
      <p>${resto.description}</p>
    </div>
    <div class="detail-restaurant-review">
      <h3>Review</h3>
      <div class="detail-restaurant-review-persons">
        ${func.createRestaurantDetailReviews(resto)}
      </div>
    </div>
  </div>
  <h2 >Komentar Pelanggan</h2>
  <div class="detail-restaurant-form">
    ${func.createRestaurantDetailForm(resto)}
  </div>
`;
export { CreateDataRestaurant, CreateDetailRestaurant };
