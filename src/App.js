import axios from "axios";

import { useState } from "react";
import { Routes , Route } from "react-router-dom";

import { Home } from "./pages/Home/index";
import { BeerList } from "./pages/BeersList/index";
import { BeerDetails } from "./pages/BeerDetails/index";
import { RandomBeer } from "./pages/RandomBeer/index";
import { NewBeerForm } from "./pages/NewBeerForm/index"


function App() {

  return (
    <div className="App">

  

    <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/beers" element={<BeerList/>} />
        <Route path ="/beers/:beerid" element={<BeerDetails/>} />
        <Route path ="/random-beer" element={<RandomBeer/>} />
        <Route path ="/new-beer" element={<NewBeerForm />} />
    </Routes>

    </div>
  );
}

export default App;
