import "../index.css";
import jmv from "../img/jmv.png";
import { useLanguage } from "../LanguageSource";
import React from "react";
import TechModal from "./TechModal";
import SoftSkillsModal from "./SoftSkillsModal";

const Home = () => {
  const { currentLanguage, translations } = useLanguage();

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center font-fira">
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto p-4">
          <div className="flex justify-center md:justify-start md:w-1/3 mb-4 md:mb-0">
            <div className="relative bottom-20 h-40 w-32 md:h-64 md:w-52 rounded-full overflow-hidden">
              <img
                src={jmv}
                alt="jmv"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative bottom-20 md:ml-4 md:w-2/3 flex flex-col">
            <div className="min-h-48 flex-grow pb-20">
              <p className="text-sm sm:text-md md:text-lg text-gray-700 mt-6 md:mt-10 text-justify md:tracking-wider tracking-tight fadeinleft">
                {translations[currentLanguage].description}
              </p>
            </div>
            <div className="absolute bottom-0 flex space-x-4 md:mt-8 w-full justify-center md:justify-start">
              <div className="w-full max-w-xs">
                <TechModal />
              </div>
              <div className="w-full max-w-xs">
                <SoftSkillsModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
