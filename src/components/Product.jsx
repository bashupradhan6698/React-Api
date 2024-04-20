export default function Product({ product, setcartCount, cartCount }) {
  function addtoCart() {
    setcartCount(cartCount + 1);
  }
  return (
    <div>
      <img width={150} height={150} src={product.thumbnail} alt="" />
      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  );
}
