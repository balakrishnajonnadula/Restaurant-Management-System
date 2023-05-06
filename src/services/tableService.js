import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class tableService {
  getTables() {
    return axios.get(BASE_URL + "tables/");
  }

  getTablesById(id) {
    return axios.get(BASE_URL + "tables/" + id + "/");
  }

  reserveTable(table) {
    let token = localStorage.getItem("token");
    return axios.post(BASE_URL + "reservations/", table, {
      headers: {
        Authorization: "Token " + token,
      },
    });
  }
}

export default new tableService();
