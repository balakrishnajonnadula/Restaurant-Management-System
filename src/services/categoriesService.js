import axios from "axios";

class categoriesService{
    getCategories(){
       return axios.get("http://192.168.7.221:8000/categories/").then(res=> res.data);
    }
        
  
}
export default new categoriesService(); 