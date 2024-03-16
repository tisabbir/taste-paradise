import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import OurRecipeHeader from "./Components/Our-Recipe-header/OurRecipeHeader";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [recipez, setRecipez] = useState([]);
  const handleWantToCook = (recipe) => {
    console.log(recipe);
    const newRecipez = [...recipez, recipe];
    setRecipez(newRecipez);
  };
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipeHeader></OurRecipeHeader>
        <div className="flex flex-col lg:flex-row justify-between gap-4 ">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Sidebar recipez={recipez}></Sidebar>
        </div>
      </div>
    </>
  );
}

export default App;
