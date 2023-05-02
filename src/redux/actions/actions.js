import { ADD_CART, DELETE_CART } from "../actionTypes.js"
const addItem = () => {
  return {
    type: ADD_CART,
  };
};
const deleteItem = () => {
  return {
    type: DELETE_CART,
  };
};
export { addItem, deleteItem };
