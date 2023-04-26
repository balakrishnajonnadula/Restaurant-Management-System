import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

class signUpService {

    addUsers(users) {
        return axios.post(BASE_URL + "users/create/", users)
    }

}
export default new signUpService();