import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import axios from "axios";

function App() {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setlistOfUSer(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App flex gap-4 flex-wrap">
      {listOfUSer.map((e, i) => (
        <UserList listOfUSer={e} key={i} />
      ))}
    </div>
  );
}
export default App;
