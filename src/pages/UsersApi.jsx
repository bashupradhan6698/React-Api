import axios from "axios";
import { useState } from "react";

/* 
crud operators in database
create, update, delete, read 

request methods
get, post, put, patch, delete
*/

function UsersApi() {
  // let users = [];
  const [users, setUsers] = useState([]);

  /* use effect */

  function fetchUsersData() {
    axios.get("https://dummyjson.com/users").then((res) => {
      // users = res.data.users;
      // console.log({ users });
      setUsers(res.data.users);
    });

    // console.log("fetching......");
    // fetch("https://dummyjson.com/users") //asynchronous functionor promise (fetch) // runs in background so .then is used
    // .then((res) => res.json())
    // console.log(res.json());
    // .then((data) => console.log(data));
    console.log("fetching......");
  }

  console.log("render");
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
            <li key={user.id}>
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
