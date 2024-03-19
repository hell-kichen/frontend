import React, { useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import { tagsApi } from "./shared/api";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    tagsApi
      .getTags()
      .then((resp) => console.log(resp))
      .catch((e) => console.log("got error", e));
  }, []);
  return (
    <>
      <Footer />
    </>
  );
}

export default App;
