import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 md:p-0 flex justify-between items-center">
      <Link to={"/"}>
        <p>governance</p>
      </Link>
      <div className="flex space-x-6">
        <div className="hidden lg:flex">
          <button
            className="bg-[#14152A] bg-opacity-75 text-md font-light
              p-3 w-fit px-4 md:px-8 rounded-full text-white flex hover:to-[#E77FBD]
              transform transition-transform duration-30 justify-center items-center"
          >
            <p className="text-md text-white font-bold">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
