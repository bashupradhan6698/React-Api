import Header from "./components/Layout/Header";
import Layout from "./components/Layout";

function UsersApi() {
  let users = [];
  function fetchUsersData() {
    console.log("fetching......");
    fetch("https://dummyjson.com/users") //asynchronous function fetch // runs in background
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  return (
    <>
      <div>users</div>
      <button onClick={fetchUsersData}>Fetch Users</button>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          paddingLeft: "0",
        }}
      >
        {users.map((user) => {
          return (
            <li>
              <div>
                <img src={user.image} alt="" />
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  {user.firstName}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UsersApi;
