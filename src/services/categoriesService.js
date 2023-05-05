import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class categoriesService {
  getCategories() {
    return axios.get(BASE_URL + "categories/");
  }
  updateCategories(id, category) {
    return axios.put(BASE_URL + "categories/" + id, category)
  }
  getCategoriesById(id) {
    return axios.get(BASE_URL + "categories/" + id);
  }
  postCategories(category) {
    return axios.post(BASE_URL + "categories/", category, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }


}
export default new categoriesService();
