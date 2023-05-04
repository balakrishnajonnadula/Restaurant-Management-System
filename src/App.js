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
import BookTable from "./Components/BookTable";

import "react-calendar/dist/Calendar.css";
import AdminHome from "./Components/AdminHome";
import DashBoard from "./Components/DashBoard";
import AdminOrders from "./Components/AdminOrders";
import AdminCustomers from "./Components/AdminCustomers";
import AdminCategories from "./Components/AdminCategories";
import AdminItemsList from "./Components/AdminItemsList";
import AdminViewCustomer from "./Components/AdminViewCustomer";
import AdminCustomerUpdate from "./Components/AdminCustomerUpdate";
import AdminViewItem from "./Components/AdminViewItem";
import AdminViewCategory from "./Components/AdminViewCategory";
import AdminCategoryUpdate from "./Components/AdminCategoryUpdate";
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
              <Route path="/booktable" element={<BookTable />} />
            </Route>
            <Route path="/admin" element={<AdminHome />}>
              <Route path="/admin" element={<DashBoard />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/customers" element={<AdminCustomers />} />
              <Route path="/admin/categories" element={<AdminCategories />} />
              <Route path="/admin/itemslist" element={<AdminItemsList />} />
              <Route
                path="/admin/customers/view/:id"
                element={<AdminViewCustomer />}
              />
              <Route
                path="/admin/customers/update/:id"
                element={<AdminCustomerUpdate />}
              />
              <Route
                path="/admin/itemlist/view/:id"
                element={<AdminViewItem />}
              />
              <Route
                path="/admin/categories/view/:id"
                element={<AdminViewCategory />}
              />
              <Route
                path="/admin/categories/update/:id"
                element={<AdminCategoryUpdate />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
