import cartReducer from "../redux/reducer/cartReducer";
import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(cartReducer);
export default store;
