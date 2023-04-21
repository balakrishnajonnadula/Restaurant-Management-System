import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class ItemsService {
  getItemsList() {
    return axios.get(BASE_URL + "items/");
  }

  getItem(id) {
    return axios.get(BASE_URL + "items/" + id);
  }
}

export default new ItemsService();
