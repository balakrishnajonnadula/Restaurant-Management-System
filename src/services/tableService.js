import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class tableService {
  getTables(id) {
    return axios.get(BASE_URL + "tables/" + id);
  }

  reserveTable(table) {
    return axios.post(
      "http://192.168.3.180:8000/tables/2/reservations/",
      table
    );
  }
}

export default new tableService();
