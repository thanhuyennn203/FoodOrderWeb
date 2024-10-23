import React, { useState } from "react";
import "./Home.css";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};
export default Home;

// import React, { useState } from 'react'
// import Header from '../../components/Header/Header'
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// import AppDownload from '../../components/AppDownload/AppDownload'

// const Home = () => {

//   const [category,setCategory] = useState("All")

//   return (
//     <>
//       <Header/>
//       <ExploreMenu setCategory={setCategory} category={category}/>
//       <FoodDisplay category={category}/>
//       <AppDownload/>
//     </>
//   )
// }

// export default Home
