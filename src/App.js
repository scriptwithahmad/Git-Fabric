import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SinglePageImg from "./components/SinglePageImg/SinglePageImg";
import SinglePage from "./components/SinglePage/SinglePage";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import Featured from "./components/Featured/Featured";
import Collections from "./components/Collections/Collections";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Collections /> */}
      {/* <Featured /> */}
      {/* <Header /> */}
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/collections" element={ <Home /> } />
        <Route exact path="/page" element={ <SinglePage /> } />
        <Route path="/singlepage" element={ <SinglePageImg /> } />  
        <Route path="/Features" element={ <Featured /> } />  
        <Route path="/collection" element={ <Collections /> } />  
        {/* <Route exact path="*" element={"404"} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
