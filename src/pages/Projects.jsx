import Project from "../components/Project";

const projects = [
  {
    id: 1,
    title: "Usepopcorn - React-based Movie Exploration App – ",
    image: "popcorn.png",
    Description:
      "• Implemented functionality to fetch and display movie data from the IMDBI API Designed UI for data presentation for key movie details, including title, release date, genre, and a brief description, added a save feature that enhances the user experience.User can give his rating to the movie",
    Link: "https://catologmovies.netlify.app/",
  },
  {
    id: 2,
    title: "Omnifood - A Responsive Front-End Food Ordering Website",
    image: "omnifood.png",
    Description:
      "• Engineered a front-end landing page for a dynamic food ordering website using HTML and CSS.• Created UI to showcase the variety of recipes, subscription options, and reviews.• Build website navigation for effortless exploration of recipe options and subscription plans.showcased  working of appplication for user experience",
    Link: "https://vinays-omni-food.netlify.app/",
  },
  {
    id: 3,
    title: "Natours API - API-based Tourist Platform",
    image: "Natours.png",
    Description:
      "• Tour booking platform built through Node.js, Express, and MongoDB.• Implemented modern security practices like JWT for authorization. • Shown tours with UI and integrated maps for a user-friendly experience.• Shown tours with UI and integrated maps for a user-friendly experience.",
    Link: "https://natours-9smh.onrender.com/",
  },
];

function Projects() {
  return (
    <div className="w-[100vw] p-2 sm:w-[100vw] lg:h-[87.5vh]  flex-col bg-[url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center ">
      <p className=" text-xl text-center font-medium md:text-2xl lg:text-3xl mb-2">
        PROJECTS
      </p>
      <div className="flex flex-col items-center gap-2 sm:flex-col md:grid md:grid-cols-2 md:gap-3 lg:flex lg:flex-row lg:justify-center lg:gap-9">
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
        {/* <Project />
        <Project />
        <Project /> */}
      </div>
    </div>
  );
}

export default Projects;
