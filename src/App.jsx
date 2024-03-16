import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import OurRecipeHeader from "./Components/Our-Recipe-header/OurRecipeHeader";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipeHeader></OurRecipeHeader>
        <div className="flex justify-between gap-4 items-center ">
          <Recipes></Recipes>
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
}

export default App;
