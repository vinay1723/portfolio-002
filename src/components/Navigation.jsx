import { Link } from "react-router-dom";

function Navigation({ active, setActive }) {
  console.log(active);
  return (
    <div
      className={`w-[100vw] h-[100vh] bg-gray-300  z-10 flex flex-col lg:flex-col lg:justify-start items-center absolute top-[69px] lg:top-[122px] right-0 border-[#2c2c2c] border-[1px] transition-all origin-top-right duration-700 ease-in-out transform ${
        active ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className=" w-[217px] h-[35px] mt-[100px] lg:mt-[200px] flex justify-left content-center gap-3 rounded-md text-white font-medium text-[18px] hover:bg-black py-1 ">
        <Link to="/portfolio" className="text-center ml-3 mb-1" onClick={setActive}>
          Home
        </Link>
      </div>
      <div className=" w-[217px] h-[35px] flex justify-left content-center gap-3 rounded-md mt-1 text-white font-medium text-[16px] hover:bg-black py-1 ml-[4px]">
        <Link to="/portfolio/contact" className="text-center ml-3" onClick={setActive}>
          Contacts me
        </Link>
      </div>
      <div className=" w-[217px] h-[35px] flex justify-left content-center gap-3 rounded-md mt-2 text-white font-medium text-[16px] hover:bg-black py-1 ml-[4px]">
        <Link to="/portfolio/aboutme" className="text-center ml-3" onClick={setActive}>
          About me
        </Link>
      </div>
      <div className=" w-[217px] h-[35px] flex justify-left content-center gap-3 rounded-md mt-2 text-white font-medium text-[16px] hover:bg-black py-1 ml-[4px]">
        <Link to="/portfolio/projects" className="text-center ml-3" onClick={setActive}>
          Project
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
