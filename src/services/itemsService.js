import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class ItemsService {
  getItemsList() {
    return axios.get(BASE_URL + "items/");
  }

  getItem(id) {
    return axios.get(BASE_URL + "items/" + id);
  }

  postReview(review) {
    return axios.post(BASE_URL + "/reviews/", review);
  }

  getReviews() {
    return axios.get(BASE_URL + "reviews/");
  }
}

export default new ItemsService();
