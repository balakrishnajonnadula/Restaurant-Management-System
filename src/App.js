import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";

import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import Categories from "./Components/Categories";
import ContactUs from "./Components/ContactUs";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}>
              <Route path="/" exact element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact" element={<ContactUs/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
