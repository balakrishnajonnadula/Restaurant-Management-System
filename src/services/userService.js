import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class userService {
  login(user) {
    return axios.post(BASE_URL + "login/", user);
  }

  addUsers(users) {
    return axios.post(BASE_URL + "users/create/", users);
  }

  getUsers() {
    return axios.get(BASE_URL + "users/");
  }
}

export default new userService();
