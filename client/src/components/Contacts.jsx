import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import GetInTouch from "./GetInTouch";

const Contacts = () => {
  return (
    <>
      <GetInTouch />
      <div className="bg-white w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap font-fira absolute bottom-0 space-x-8">
        <a
          className="hover:scale-110 w-40 tracking-wide h-10 flex items-center justify-center rounded-lg bg-mainBlue shadow-md shadow-gray-200 group font-bold transition-all duration-300"
          href="https://www.linkedin.com/in/jeanmarquesvieira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin"
            title="LinkedIn"
            className="h-6 sm:h-8 pr-2 border-2 border-transparent rounded-md"
          />
          LinkedIn
        </a>
        <a
          className="hover:scale-110 w-40 tracking-wide h-10 flex items-center rounded-lg bg-mainBlue shadow-md shadow-gray-200 group font-bold transition-all duration-300"
          href="https://github.com/jeanmarquesvieira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="github"
            title="GitHub"
            className="h-6 sm:h-8 pr-2 pl-5 border-2 border-transparent rounded-md"
          />
          GitHub
        </a>
      </div>
    </>
  );
};

export default Contacts;
