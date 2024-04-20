import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <nav
        style={{
          backgroundColor: "yellow",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "1rem",
            paddingLeft: "0",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users-api">Users from API</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/carts">Carts({props.cartCount})</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}

export default Header;
