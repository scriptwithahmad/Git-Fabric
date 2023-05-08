import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SinglePageImg from "./components/SinglePageImg/SinglePageImg";
import SinglePage from "./components/SinglePage/SinglePage";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/page" element={ <SinglePage /> } />
        <Route path="/singlepage" element={ <SinglePageImg /> } />
        {/* <Route exact path="*" element={"404"} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
