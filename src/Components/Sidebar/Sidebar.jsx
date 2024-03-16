import PropTypes from "prop-types";
import { useState } from "react";
const Sidebar = ({ recipez, setRecipez }) => {
  const [current, setCurrent] = useState([]);

  const handlePreparing = (recipe) => {
    const newCurrent = [...current, recipe];
    setCurrent(newCurrent);

    const remainingRecipe = recipez.filter(
      (remain) => remain.recipe_id !== recipe.recipe_id
    );
    setRecipez(remainingRecipe);
  };

  let totalCurrentTime = 0;
  let totalCurrentCalories = 0;

  let totalWantTime = 0;
  let totalWantCalories = 0;

  return (
    <div className="border-2 border-[#28282833] border-solid rounded-2xl space-y-5 min-w-96">
      <h1 className="font-semibold text-2xl text-center mt-8">
        Want to Cook : 0{recipez.length}
      </h1>
      <hr />

      {/* table */}
      <table className="para space-y-6 w-full">
        <tr className="">
          <th>No</th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>

        {recipez.map((recipe, idx) => {
          totalWantTime = totalWantTime + recipe.preparing_time;

          totalWantCalories = totalWantCalories + recipe.calories;
          return (
            <tr key={idx} className=" space-x-2  bg-[#28282808] mt-6">
              <td>{idx + 1}</td>
              <td className=" max-w-28">{recipe.recipe_name}</td>
              <td>
                {recipe.preparing_time} <br /> mins
              </td>
              <td>
                {recipe.calories} <br /> calories
              </td>
              <button
                onClick={() => {
                  handlePreparing(recipe);
                }}
                className="btn bg-[#0BE58A] rounded-full text-black py-0"
              >
                Preparing
              </button>
            </tr>
          );
        })}
      </table>
      {/* table */}

      <p>Estimated Time = {totalWantTime} minutes </p>
      <p>Estimated Calories = {totalWantCalories} calories </p>

      <hr />

      <h1 className="font-semibold text-2xl text-center mt-8">
        Currently Cooking: 0{current.length}
      </h1>
      <hr />

      {/* table */}
      <table className="para space-y-6 w-full">
        <tr className="">
          <th>No</th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>

        {current.map((recipe, idx) => {
          totalCurrentTime = totalCurrentTime + recipe.preparing_time;

          totalCurrentCalories = totalCurrentCalories + recipe.calories;

          return (
            <tr key={idx} className=" space-x-2  bg-[#28282808] mt-6">
              <td>{idx + 1}</td>
              <td className=" max-w-28">{recipe.recipe_name}</td>
              <td>
                {recipe.preparing_time} <br /> mins
              </td>
              <td>
                {recipe.calories} <br /> calories
              </td>
            </tr>
          );
        })}
      </table>
      {/* table */}

      <hr />
      <p>Total Time = {totalCurrentTime} minutes </p>
      <p>Total Calories = {totalCurrentCalories} calories </p>
    </div>
  );
};
Sidebar.propTypes = {
  recipez: PropTypes.object.isRequired,
  setRecipez: PropTypes.func,
};
export default Sidebar;
