import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import UsersApi from "./pages/UsersApi";

import Layout from "./pages/components/Layout"; //imported from index.jsx

import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users-api" element={<UsersApi />} />
          <Route path="/products">
            <Route path="" element={<Products />}></Route>
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
