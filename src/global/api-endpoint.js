import CONFIG from "./config";

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  IMAGE: {
    MEDIUM: (id) => `${CONFIG.BASE_IMAGE_URL}medium/${id}`,
    LARGE: (id) => `${CONFIG.BASE_IMAGE_URL}large/${id}`,
  },
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
