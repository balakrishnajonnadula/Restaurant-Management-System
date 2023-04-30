import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class ItemsService {
  getItemsList() {
    return axios.get(BASE_URL + "items/");
  }

  getItem(id) {
    return axios.get(BASE_URL + "items/" + id);
  }


  getReviews() {
    let token = localStorage.getItem("token");
    return axios.get(BASE_URL + "reviews/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  addToCart(item) {
    let token = localStorage.getItem("token");
    return axios.post(BASE_URL + "cart_items/", item, {
      headers: {
        Authorization: "Token " + token,
      },
    });
  }

  viewCartItems() {
    let token = localStorage.getItem("token");
    return axios.get(BASE_URL + "cart_items/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }
}

export default new ItemsService();
