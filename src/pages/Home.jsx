import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./home.css";
function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(function () {
    setIsVisible(true);
  }, []);
  return (
    <section
      className={`w-[100vw] h-[87.5vh]  p-2 bg-yellow-400  flex flex-col justify-center items-center  overflow-x-hidden text-center md:text-center home-page bg-cover bg-center  duration-700 ease-out transition-all ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <img
        src="./img/img3.png"
        className={`w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-[8px] border-white-500 bg-slate-300 rounded-full transition-all ease-out duration-900 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      />
      <h1
        className={`text-2xl md:text-3xl lg:text-4xl font-bold mt-[20px] text-gray-700 transition-all ease-out duration-1000 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        Hi, Im Vinay kumar, a MERN Stack Developer
      </h1>
      <p
        className={`mt-4 text-xl md:text-2xl lg:text-3xl text-gray-100 transition-all ease-out duration-1000 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        Crafting dynamic web applications with MongoDB, Express, React, and
        Node.js
      </p>
      <Link
        to="/projects"
        className={`mt-8 px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-all ease-out duration-1000 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } `}
      >
        View My Work
      </Link>
    </section>
  );
}

export default Home;

{
  /* <div className="boder-[4px] border-slate-100">
        <img
          src=".././public/img/img2.jpg"
          className="rounded-full w-[220px] h-[220px] shadow-2xl"
        />
      </div> */
}
