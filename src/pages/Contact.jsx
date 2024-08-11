import { Whatsapp, Linkedin, Intsagram, Phone, Gmail } from "../components/svg";
import { useState, useEffect } from "react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`w-[100vw] p-3 lg:h-[87.5vh] lg:pt-10 bg-cover bg-center bg-[url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]   lg:flex justify-center font-['Like sans'] duration-700 ease-out transition-all ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="lg:w-[400px] lg:h-[600px] bg-white rounded-2xl shadow-2xl lg:gap-5 lg:flex lg:flex-col lg:justify-start lg:items-center">
        <div className="flex items-center justify-center flex-col text-center bg-cyan-400 w-full rounded-t-2xl lg:flex lg:flex-col lg:justify-center lg:items-center">
          <img
            src="./img/img2.jpg"
            className="w-[100px] h-[100px] mt-2 lg:w-[200px] lg:h-[200px] object-cover  lg:mt-3  rounded-t-full border-[8px] border-white"
          />
          <p className="text-[18px] font-[500]">Vinay Kumar</p>
          <p className="text-[16px]">MERN stack developer</p>
        </div>
        <div>
          <ul className="flex gap-2 flex-col justify-start text-[16px] lg:text-[18px] ml-4 px-2">
            <li className="flex gap-2 items-center">
              <Whatsapp />
              91-7337000221
            </li>
            <li className="flex gap-2 items-center">
              <Linkedin />
              www.linkedin.com/in/vinay-kumar001/
            </li>
            <li className="flex gap-2 items-center">
              <Intsagram />
              https://www.instagram.com/vi_nay.?igsh=NWptb3BsaWV6eXZ0
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-start flex-col gap-2 mr-[50px]">
            <li className="flex gap-2 items-center">
              <Phone />
              7337000221
            </li>
            <li className="flex gap-2 items-center">
              <Gmail />
              vinaykumargoud.17july@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="flex p-3 mt-5 lg:w-[500px] lg:h-[600px] lg:mt-0 bg-opacity-60 flex-col justify-start lg:ml-[30px] lg:pl-[30px] bg-slate-300">
        <div className=" mt-[20px]">
          <h1 className="text-[24px] lg:text-[36px] font-[600]">
            Get in touch with me
          </h1>
          <p className="text-[16px] lg:text-[18px]">
            Connect with me via LinkedIn,Instagram,WhatsApp,Email or contact
            form or just call me.{" "}
          </p>
        </div>
        <form className="lg:mt-[30px] lg:">
          <ul className="flex flex-col gap-4 text-[14px] lg:gap-5 lg:text-[18px] font-[500]">
            <li className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=" h-[30px] lg:w-[450px] lg:h-[50px] rounded-2xl pl-2 focus:outline-none"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="h-[30px] lg:w-[450px] lg:h-[50px] rounded-2xl pl-2 focus:outline-none"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label>Your message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                className="lg:w-[450px] lg:h-[120px] rounded-2xl p-2 focus:outline-none"
              ></textarea>
            </li>
            <li>
              <button className="h-[30px] w-[60px] mt-2 lg:mt-0  lg:w-[100px] lg:h-[40px] text-white bg-cyan-700 rounded-2xl">
                Send
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Contact;

{
  /* <img
          src={`./../public/img/img2.jpg`}
          className="rounded-full w-1/2 md:w-full"
        /> */
}
