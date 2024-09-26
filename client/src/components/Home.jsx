import "../index.css";
import jmv from "../img/jmv.png";
import { useLanguage } from "../LanguageSource";
import React from "react";
// import TechModal from "./TechModal";
// import Technologies from "./Technologies";
import salesforce from "../img/technologies/salesforce.png";
import javascript from "../img/technologies/js.png";
import react from "../img/technologies/react.png";
import nodejs from "../img/technologies/nodejs.png";
import html from "../img/technologies/html.png";
import css from "../img/technologies/css.png";
import tailwind from "../img/technologies/tailwind.png";
import c from "../img/technologies/C_programming_resized.png";

const languangeSrc = [
  { src: c, name: "C" },
  { src: react, name: "React" },
  { src: javascript, name: "JavaScript" },
  { src: nodejs, name: "Node.js" },
  { src: salesforce, name: "Salesforce" },
  { src: tailwind, name: "Tailwind" },
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
];

const Home = () => {
  const { currentLanguage, translations } = useLanguage();

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex pt-4 justify-center font-fira">
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto md:w-5/6">
          <div className="flex justify-center md:justify-start md:w-1/3 mb-6 md:items-center">
            <img
              src={jmv}
              alt="jmv"
              className="inset-0 h-full w-full object-cover max-w-48 rounded-lg md:h-64"
            />
          </div>
          <div className="flex text-center md:text-start flex-col justify-center h-full md:h-auto px-4">
            {/* Added 'justify-center' and removed 'align-middle' */}
            <div className="py-6">
              {translations[currentLanguage].description}
            </div>
            <div className="flex w-full">
              {languangeSrc.map((lang, id) => (
                <div key={id} className="">
                  <img
                    className="hover:scale-110 transition-all ease-in-out mx-2 w-20"
                    alt={`Logo ${lang.name}`}
                    src={lang.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
