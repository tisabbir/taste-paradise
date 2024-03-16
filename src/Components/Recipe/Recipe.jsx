import PropTypes from "prop-types";
import { FaFireAlt, FaRegClock } from "react-icons/fa";
const Recipe = ({ recipe }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  console.log(recipe_image);
  return (
    <div className="p-6 border-2 border-solid border-[#28282833] rounded-2xl space-y-5">
      <img className="rounded-2xl" src={recipe_image} alt="" />
      <h2 className="text-xl font-semibold">{recipe_name}</h2>
      <p className="para">{short_description}</p>
      <hr />
      <h2 className="text-xl font-medium text-[#282828] ">
        Ingredients : {ingredients.length}
      </h2>

      <ul className="para">
        {ingredients.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>

      <hr />
      <div className="flex items-center gap-3">
        <FaRegClock></FaRegClock>
        <p> {preparing_time} minutes</p>
        <FaFireAlt></FaFireAlt>
        <p> {calories} calories</p>
      </div>
      <button className="btn btn-ghost bg-[#0BE58A] rounded-full ">
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  item: PropTypes.string,
};
export default Recipe;
