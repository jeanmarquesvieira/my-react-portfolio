import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../LanguageSource";
import salesforce from "../img/technologies/salesforce.png";
import javascript from "../img/technologies/js.png";
import react from "../img/technologies/react.png";
import nodejs from "../img/technologies/nodejs.png";
import html from "../img/technologies/html.png";
import css from "../img/technologies/css.png";
import tailwind from "../img/technologies/tailwind.png";
import c from "../img/technologies/C_programming.png";

const TechModal = () => {
  const { currentLanguage, translations } = useLanguage();
  const [showTechnologies, setShowTechnologies] = useState(false);
  const techRef = useRef();

  const languagesSrc = [
    { src: c, name: "C" },
    { src: react, name: "React" },
    { src: javascript, name: "JavaScript" },
    { src: nodejs, name: "Node.js" },
    { src: salesforce, name: "Salesforce" },
    { src: tailwind, name: "Tailwind" },
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
  ];

  useEffect(() => {
    function handleEscKey(e) {
      if (e.key === "Escape") {
        setShowTechnologies(false);
      }
    }

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const handleMouseClick = (e) => {
    if (techRef.current && !techRef.current.contains(e.target)) {
      setShowTechnologies(false);
    }
  };

  useEffect(() => {
    if (showTechnologies) {
      document.addEventListener("mousedown", handleMouseClick);
    }
    return () => document.removeEventListener("mousedown", handleMouseClick);
  }, [showTechnologies]);

  return (
    <>
      <div className="flex justify-center md:justify-start font-fira">
        <button
          id="testTechBtn"
          className="bg-mainBlue text-black py-2 min-w-44 rounded-xl font-medium transition duration-400 hover:scale-110 font-fira text-md md:text-lg focus:outline-none"
          onClick={() => setShowTechnologies(true)}
        >
          {translations[currentLanguage].technologies}
        </button>
        {showTechnologies && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-75"
              onClick={() => setShowTechnologies(false)}
            ></div>
            <div className="relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 my-2 mx-auto pt-16">
              <div
                ref={techRef}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                <div className="flex items-start justify-between border-b p-5 border-solid border-blueGray-200 rounded-t">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {translations[currentLanguage].technologies}
                    </h3>
                    <p className="text-gray-500 text-justify text-sm pt-4">
                      {translations[currentLanguage].techSubtitle}
                    </p>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowTechnologies(false)}
                  ></button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="grid grid-cols-2 gap-4 place-items-center">
                    {languagesSrc.map((lang, id) => (
                      <div key={id} className="group relative">
                        <img
                          className="max-w-16 transition-transform duration-200 transform hover:scale-110"
                          alt={`Logo ${lang.name}`}
                          src={lang.src}
                        />
                        <div
                          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-200 rounded-lg shadow-sm opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          {lang.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-mainBlue text-black font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowTechnologies(false)}
                  >
                    {translations[currentLanguage].close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TechModal;
