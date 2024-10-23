import React from "react";
import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./Components/FoodDisplay/FoodDisplay";
import Menu from "./Pages/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
