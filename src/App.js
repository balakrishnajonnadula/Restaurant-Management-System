import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";

import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import Categories from "./Components/Categories";
import ContactUs from "./Components/ContactUs";

import ListItems from "./Components/ListItems";
import ViewItem from "./Components/ViewItem";
import SignUp from "./Components/SignUp";
import OrderFood from "./Components/OrderFood";
import OrderTable from "./Components/OrderTable";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}>
              <Route path="/" exact element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/listitems/:slug" element={<ListItems />} />
              <Route path="/viewitem/:id" element={<ViewItem />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/orderfood" element={<OrderFood />} />
              <Route path="/ordertable" element={<OrderTable />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
