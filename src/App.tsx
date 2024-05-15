import React, { useEffect } from "react";
import "./App.css";
import { tagsApi } from "./shared/api";
import Title from "./components/title";
import Footer from "./components/footer";
import Nav from "./components/Nav";
import LinkComponent from "./components/link";

function App() {
  useEffect(() => {
    tagsApi
      .getTags()
      .then((resp) => console.log(resp))
      .catch((e) => console.log("got error", e));
  }, []);
  return (
    <>
      <Nav auth={true} currentPath={"#"} />
    </>
  );
}

export default App;