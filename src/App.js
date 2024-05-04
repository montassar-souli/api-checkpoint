import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import axios from "axios";

function App() {
  const [listOfUSer, setlistOfUSer] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setlistOfUSer(res.data);
    });
    console.log(listOfUSer);
  }, []);
  return (
    <div className="App">
      {/*listOfUSer.map((e, i) => (
        <UserList />
      ))*/}
    </div>
  );
}
export default App;
