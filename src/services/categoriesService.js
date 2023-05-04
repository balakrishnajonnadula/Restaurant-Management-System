import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class categoriesService {
  getCategories() {
    return axios.get(BASE_URL + "categories/");
  }
  updateCategories(category){
    return axios.put(BASE_URL+"categories/")
  }
 
}
export default new categoriesService();
