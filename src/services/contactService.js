import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class contactService {
  postComments(comments) {
    return axios.post(BASE_URL + "contacts/", comments).then((res) => res.data);
  }
}

export default new contactService();
