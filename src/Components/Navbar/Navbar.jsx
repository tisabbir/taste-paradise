import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="">
          <a className="btn btn-ghost text-xl lg:text-3xl font-bold">
            Taste Paradise
          </a>
        </div>
        <div className="hidden lg:inline">
          <button className="btn btn-ghost">Home</button>
          <button className="btn btn-ghost">Recipe</button>
          <button className="btn btn-ghost">Search</button>
          <button className="btn btn-ghost">About</button>
        </div>
        <div className="flex-none gap-2">
          <div className="input input-bordered w-24 md:w-auto hidden lg:flex justify-between items-center gap-4 text-2xl rounded-full bg-[#150b2b0d] ">
            <CiSearch></CiSearch>
            <input type="text" placeholder="Search" className="border-none" />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <IoPersonCircleOutline className="text-4xl bg-green-400 rounded-full"></IoPersonCircleOutline>
              </div>
            </div>
            <ul
              tabIndex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Home
                  <span className="badge">Search</span>
                </a>
              </li>
              <li>
                <a>Recipe</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
