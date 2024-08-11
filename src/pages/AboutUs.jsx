import { useState, useEffect } from "react";
import {
  Html,
  Css,
  Javascript,
  React,
  Redux,
  Nodejs,
  Express,
  Github,
  Java,
} from "../components/svg";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(function () {
    setIsVisible(true);
  }, []);
  return (
    <div className="w-svw  lg:flex lg:flex-col bg-[url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center font-['Like sans'] lg:justify-center lg:items-center  p-4">
      <section
        className={`w-[88vw] p-2 mb-2  flex-col lg:w-[88vw] lg:h-[80vh]  rounded-2xl bg-opacity-30 bg-white flex lg:flex-row lg:gap-5 border-[8px] border-zinc-300  duration-700 ease-out transition-all ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-center lg:mt-[80px] lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <img
            src="./img/img2.jpg"
            className="w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] border-[8px] lg:mt-[-100px] rounded-2xl border-cyan-200 "
          />
        </div>
        <div className="lg:mt-[80px] lg:w-1/2">
          <h1 className="text-[24px] lg:text-[36px] font-[600] lg:w-[700px]">
            Hi,Iam Patnam Vinay kumar goud
          </h1>
          <p className="text-[12px] lg:text-[18px] lg:w-[700px] lg:mt-[20px]">
            Hello! Im Vinay Kumar a passionate MERN stack developer with a
            strong foundation in both front-end and back-end development. I
            recently graduated from Lovely Professional University, where I
            honed my skills in full stack development, specializing in building
            scalable and efficient web applications. Throughout my academic
            journey, Ive worked on several projects, including a comprehensive
            full stack application as my capstone project. This experience
            allowed me to dive deep into complex API development, user interface
            design with React, and robust back end logic using Node.js, Express,
            and MongoDB. I am particularly skilled in using the MERN stack to
            create dynamic and responsive web applications. Additionally, I have
            experience using Tailwind CSS for styling, ensuring that the user
            interfaces I create are not only functional but also visually
            appealing. Currently, Im actively seeking opportunities to apply my
            skills and grow as a developer. Im eager to contribute to innovative
            projects and collaborate with a team that values creativity,
            learning, and excellence.
          </p>
        </div>
      </section>
      <section className="flex flex-col lg:mt-[100px] bg-opacity-70 font-[500] lg:w-[92vw] rounded-2xl bg-slate-50 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <h1 className=" text-center text-[24px] lg:text-[36px] lg:font-[600]">
          SKILLS
        </h1>

        <ul className=" grid grid-cols-2 lg:flex lg:gap-20 lg:mt-[30px] lg:text-[18px]  lg:mb-6">
          <li className="flex flex-col items-center">
            <Html />
            <p>HTML</p>
          </li>
          <li className="flex flex-col items-center">
            <Css />
            <p>CSS</p>
          </li>
          <li className="flex flex-col items-center">
            <Javascript />
            <p>Javascript</p>
          </li>
          <li className="flex flex-col items-center">
            <React />
            <p>ReactJs</p>
          </li>

          <li className="flex flex-col items-center">
            <Redux />
            <p>Redux</p>
          </li>
          <li className="flex flex-col items-center">
            <Nodejs />
            <p>NodeJs</p>
          </li>
          <li className="flex flex-col items-center">
            <Github />
            Github
          </li>
          <li className="flex flex-col items-center">
            <Java />
            <p>Java</p>
          </li>
          <li className="flex flex-col items-center">
            <Express />
            <p>ExpressJs</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
