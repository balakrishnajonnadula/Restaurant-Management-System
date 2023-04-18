import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class categoriesService {
  getCategories() {
    return axios.get(BASE_URL + "categories/").then((res) => res.data);
  }
}
export default new categoriesService();
