const Sidebar = ({ recipez }) => {
  return (
    <div className="border-2 border-[#28282833] border-solid rounded-2xl space-y-5">
      <h1 className="font-semibold text-2xl text-center mt-8">
        Want to Cook : 0{recipez.length}
      </h1>
      <hr />

      {/* table */}
      <table className="para">
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>

        <tr>
          <td>01</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <button className="btn btn-ghost bg-[#0BE58A] rounded-full">
            Preparing
          </button>
        </tr>
      </table>
      {/* table */}
    </div>
  );
};

export default Sidebar;
