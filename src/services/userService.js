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

  logout() {
    let token = localStorage.getItem("token");
    return axios.post(
      BASE_URL + "logout/",
      {},
      {
        headers: {
          Authorization: "Token " + token,
        },
      }
    );
  }

  reviewItem(review) {
    let token = localStorage.getItem("token");
    return axios.post(BASE_URL + "reviews/", review, {
      headers: {
        Authorization: "Token " + token,
      },
    });
  }
}

export default new userService();
