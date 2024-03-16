import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className=" flex-1">
      <div className="recipe-container grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe, idx) => {
          return (
            <Recipe
              key={idx}
              recipe={recipe}
              handleWantToCook={() => {
                handleWantToCook(recipe);
              }}
            ></Recipe>
          );
        })}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleWantToCook: PropTypes.func,
};
export default Recipes;
