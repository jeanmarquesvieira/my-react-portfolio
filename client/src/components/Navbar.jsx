import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageSource";
import cli from "../img/cli.png";
import br from "../img/br.png";
import uk from "../img/map.png";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { currentLanguage, translations, changeLanguage } = useLanguage();

  let hello = translations[currentLanguage].hello;
  let myNameIs = translations[currentLanguage].myNameIs;

  const handleLanguageChange = (lang) => {
    if (lang !== currentLanguage) {
      changeLanguage(lang);
    }
  };

  const toggleLanguage = () => {
    return currentLanguage === "en" ? "pt" : "en";
  };

  return (
    <nav className="block px-3 sm:px-5 md:px-7 lg:px-9 py-2 sm:py-3 text-black bg-mainBlue overflow-hidden font-fira focus:outline-none">
      <div className="flex items-center justify-between focus:outline-none">
        <div>
          <Link to="/" className="hover:cursor-pointer">
            <img
              alt="Cli"
              className="h-7 sm:h-10 min-w-7 hover:cursor-pointer hover:scale-110 w-auto transition-all duration-300"
              src={cli}
            />
          </Link>
        </div>
        <div>
          <h1 className="text-xs sm:text-sm md:text-base w-28.5 pl-6 sm:pl-10 md:pl-12 font-bold text-gray-800 justify-center">
            <Typewriter
              words={[hello, myNameIs]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed="150"
              delaySpeed={1000}
            />
          </h1>
        </div>
        <ul className="flex flex-nowrap font-bold flex-1 text-xs sm:text-sm md:text-base justify-end gap-1 sm:gap-10 lg:gap-14">
          <li className="block p-1 text-blue-gray-900">
            <Link
              to="/projects"
              className="whitespace-nowrap tracking-wider flex items-center transition-colors rounded-lg hover:text-cyan-300 hover:bg-sky-900 px-1 py-1 sm:px-4 sm:py-1 duration-300"
            >
              {translations[currentLanguage].projects}
            </Link>
          </li>
          <li className="block p-1 text-blue-gray-900">
            <Link
              to="/contacts"
              className="whitespace-nowrap tracking-wider flex items-center transition-colors rounded-lg hover:text-cyan-300 hover:bg-sky-900 px-1 py-1 sm:px-4 sm:py-1 sm:mr-5 mr-1 duration-300"
            >
              {translations[currentLanguage].contacts}
            </Link>
          </li>
        </ul>
        <div className="flex items-center sm:x-4 md:x-6 min-w-7">
          <img
            alt={toggleLanguage()}
            title={toggleLanguage() === "pt" ? "Português" : "English"}
            onClick={() => handleLanguageChange(toggleLanguage())}
            className="languageSwitch h-8 sm:h-10 hover:cursor-pointer hover:scale-110 border-2 border-transparent rounded-md transition-all duration-300"
            src={currentLanguage === "en" ? br : uk}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
