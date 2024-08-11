import ThreeBar from "../icons/ThreeBar";

function Footer() {
  return (
    <div className=" w-svw h-[12.5vh] flex justify-between items-center p-4 bg-slate-50 md:svw lg:svw ">
      <h1 className="text-xl md:text-2xl font-medium ">Vinay Kumar</h1>
      <div className="lg:hidden">
        <ThreeBar />
      </div>
      <div className="hidden lg:block">
        <ul className="text-xl font-bold gap-8 md:text-2xl flex  lg:text-2xl">
          <li>Home</li>
          <li>About Me</li>
          <li>Media</li>
          <li>Projects</li>
          <li>Qualification</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
