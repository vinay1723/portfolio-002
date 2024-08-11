import { useState, useEffect } from "react";

// {
//   titile: "Usepopcorn - React-based Movie Exploration App – ",
//   Description:
//     "• Implemented functionality to fetch and display movie data from the IMDBI API Designed UI for data presentation for key movie details, including title, release date, genre, and a brief description, added a save feature that enhances the user experience.",
//   Link: "https://catologmovies.netlify.app/",
// }

function Project({ data }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
  }, []);
  return (
    <div
      className={`shadow-2xl mt-8 w-[80vw] rounded-2xl bg-white  sm:w-[80vw] md:w-[45vw]  md:ml-4 lg:w-[25vw] lg:gap-2
      transition-all ease-out duration-700 ${
        isVisible ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } `}
    >
      <img
        src={`./img/${data.image}`}
        className="rounded-t-xl w-full md:w-full"
      />
      <div className="m-4 flex-col gap-3">
        <h2 className="text-xl mb-3 md:text-2xl">{data.title}</h2>
        <ol className=" text-sm md:text-lg ">
          <li>{data.Description}</li>
          {/* <li>{data.Description.split(".")[1]}</li> */}
        </ol>
      </div>
      <div className="mb-4">
        <a
          className="text-sm px-4 py-2 m-3  text-white text-center bg-blue-600 rounded-md lg:text-xl"
          href={data.Link}
        >
          Link
        </a>
      </div>
    </div>
  );
}

export default Project;
