import PropTypes from "prop-types";
import { useState } from "react";
const Sidebar = ({ recipez }) => {
  const [current, setCurrent] = useState([]);

  const handlePreparing = (recipe) => {
    console.log(recipe);
    const newCurrent = [...current, recipe];
    setCurrent(newCurrent);
  };
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

      <h1 className="font-semibold text-2xl text-center mt-8">
        Currently Cooking: 0{current.length}
      </h1>
      <hr />
    </div>
  );
};
Sidebar.propTypes = {
  recipez: PropTypes.object.isRequired,
};
export default Sidebar;
