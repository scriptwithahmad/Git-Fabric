import React from "react";
import Collections from "../components/Collections/Collections";
import Featured from "../components/Featured/Featured";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Product from "../components/Product/Product";

function Home() {
  return (
    <>
      <Header />
      <Product />
      <Featured />
      <Collections />
    </>
  );
}

export default Home;
