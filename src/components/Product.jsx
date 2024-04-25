import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/cartSlice";

export default function Product({ product, setcartCount, cartCount }) {
  const dispatch = useDispatch();

  function addtoCart() {
    setcartCount(cartCount + 1);
  }
  function addtoreduxCart() {
    dispatch(increment());
    // dispatch(decrement());
  }
  return (
    <div>
      <img width={150} height={150} src={product.thumbnail} alt="" />
      <button onClick={addtoCart}>Add to Cart</button>
      <button onClick={addtoreduxCart}>Add to reduxCart</button>
    </div>
  );
}
