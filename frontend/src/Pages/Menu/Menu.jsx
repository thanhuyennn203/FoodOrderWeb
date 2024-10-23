import React, { useContext } from "react";
import { menu_list } from "../../assets/assets";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";

const Menu = () => {
  return (
    <div>
      <ExploreMenu category={"All"} />
    </div>
  );
};

export default Menu;
