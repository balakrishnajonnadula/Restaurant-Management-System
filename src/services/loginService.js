import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class loginService {
  login(user) {
    return axios.post(BASE_URL + "login/" + user);
  }
}

export default new loginService();
 