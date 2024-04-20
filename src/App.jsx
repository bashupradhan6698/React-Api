import { useState } from "react";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import UsersApi from "./pages/UsersApi";
import Carts from "./pages/carts";

import Layout from "./components/Layout"; //imported from index.jsx

import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
  let [cartCount, setcartCount] = useState(0);
  return (
    <>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users-api" element={<UsersApi />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/products">
            <Route
              path=""
              element={
                <Products cartCount={cartCount} setcartCount={setcartCount} />
              }
            ></Route>
            <Route path="one" element={<h2>One</h2>}></Route>
            <Route path="two" element={<h2>two</h2>}></Route>
          </Route>
        </Routes>
      </Layout>
      {/* <hr /> */}
    </>
  );
}

export default App;
