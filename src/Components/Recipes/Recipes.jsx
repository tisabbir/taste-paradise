import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className=" lg:w-2/3">
      <div className="recipe-container grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe, idx) => {
          return <Recipe key={idx} recipe={recipe}></Recipe>;
        })}
      </div>
    </div>
  );
};

export default Recipes;
