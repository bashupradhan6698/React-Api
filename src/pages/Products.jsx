import axios from "axios";
import { useEffect, useState } from "react";

// let products = ["iphone", "samsung"];

function Products() {
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
      <h1>Count = {count}</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {products.map((product) => {
          return (
            <>
              <li key={product.id}>{product.title}</li>
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
