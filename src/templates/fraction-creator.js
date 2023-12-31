const createRestaurantRatingStars = (numberRating) => {
  let ratingStars = '';
  for (let makeStar = 1; makeStar <= 5; makeStar++) {
    if (makeStar <= Math.round(numberRating)) {
      ratingStars += `<span class="fa fa-star star-checked"></span>`;
    } else {
      ratingStars += `<span class="fa fa-star"></span>`;
    }
  }
  return ratingStars;
};

const createRestaurantDetailCategories = (restaurant) => {
  const dataArray = [];
  restaurant.categories.forEach((data) => {
    dataArray.push(data.name);
  });
  return dataArray;
};

const createRestaurantDetailMenus = (restaurant, menu) => {
  const data = restaurant.menus;
  let result = '';
  switch (menu) {
    case 'foods':
      const dataFoods = data.foods;
      dataFoods.forEach((food) => {
        result += `<li>${food.name}</li>`;
      });
      break;
    case 'drinks':
      const dataDrinks = data.drinks;
      dataDrinks.forEach((drink) => {
        result += `<li>${drink.name}</li>`;
      });
      break;
    default:
      return;
  }
  return result;
};

const createRestaurantDetailReviews = (restaurant) => {
  const data = restaurant.customerReviews;
  let result = '';
  data.forEach((personReview) => {
    result += `
      <div class="detail-restaurant-review-person">
        <h4>${personReview.review}</h4>
        <p><i class="fa fa-user"></i> ${personReview.name}, ${personReview.date}</p>
      </div>
    `;
  });
  return result;
};

const createRestaurantDetailForm = () => {
  return `
    <form method="POST" id="formReview">
      <label for="nameInput">Name</label>
      <input type="text" id="nameInput" name="nameInput" placeholder="Input Nama" aria-label="Masukkan nama anda" required>
      <label for="reviewInput">Review</label>
      <textarea name="reviewInput" id="reviewInput" rows="5" placeholder="Input Review" aria-label="Masukkan review anda" required></textarea>
      <button type="submit" id="submitReview">Kirim Review</button>
    </form>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="suka restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="batal suka restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantRatingStars,
  createRestaurantDetailCategories,
  createRestaurantDetailMenus,
  createRestaurantDetailReviews,
  createRestaurantDetailForm,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
