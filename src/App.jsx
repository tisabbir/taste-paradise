import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import OurRecipeHeader from "./Components/Our-Recipe-header/OurRecipeHeader";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipeHeader></OurRecipeHeader>
      </div>
    </>
  );
}

export default App;
