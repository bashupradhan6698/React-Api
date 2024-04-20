import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";

// let products = ["iphone", "samsung"];

function Products(props) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  // const [products, setProducts] = useState([]);

  /* components life cycle
componentDidMount
componentdDidUpdate
*/

  /*use effect - 1. call back 2. dependencies-array*/

  useEffect(() => {
    console.log("use effect");
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []); //[] -  dependencies - lets the use-effect to run only once

  function fetchProducts() {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }

  console.log("components re-render");

  function addtoCart() {
    console.log("add to header");
    props.setcartCount(props.cartCount + 1);
  }

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button onClick={fetchProducts}>Fetch Products</button>
      <h1>Products list</h1>
      {/* <h1>Cart Count = {cartCount}</h1> */}
      <ul>
        {products.map((product) => {
          return (
            <>
              <li key={product.id} style={{ marginBottom: "5px" }}>
                <Product
                  cartCount={props.cartCount}
                  setcartCount={props.setcartCount}
                  product={product}
                />
              </li>
            </>
          );
        })}
        {/* {products.map((product) => {
          return (
            <>
              <li key={product.id}>
                <div>
                  <img src={product.images} alt="" />
                  <p style={{ textAlign: "right" }}>{product.title}</p>
                </div>
              </li>
            </>
          );
        })} */}
      </ul>
    </>
  );
}

export default Products;
