import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";

import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
<<<<<<< HEAD
import Categories from "./Components/Categories";
=======
>>>>>>> origin/master

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/login" element={<Login />} />
<<<<<<< HEAD
            <Route path="/categories" element={<Categories />} />
=======
>>>>>>> origin/master
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
