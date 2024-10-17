import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import { useLanguage } from "../LanguageSource";

const Contacts = () => {
  const { translations, currentLanguage } = useLanguage();

  return (
    <>
      <h1 className="text-2xl font-extrabold text-center font-fira pt-40">
        {translations[currentLanguage].getInTouch}
      </h1>
      <p className="font-fira text-center pt-20 md:text-lg px-1">
        {translations[currentLanguage].reachMe}
      </p>
      <div className="bg-white w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap font-fira absolute space-x-8 pt-32">
        <a
          className="ga4-linkedin hover:scale-110 w-40 tracking-wide h-11 flex items-center justify-center rounded-lg bg-mainBlue shadow-md shadow-gray-200 group font-bold transition-all duration-300"
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
          className="ga4-github hover:scale-110 w-40 tracking-wide h-11 flex items-center rounded-lg bg-mainBlue shadow-md shadow-gray-200 group font-bold transition-all duration-300"
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
