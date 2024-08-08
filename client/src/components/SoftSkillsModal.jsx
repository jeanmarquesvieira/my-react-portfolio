import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../LanguageSource";

const SoftSkillsModal = () => {
  const { currentLanguage, translations } = useLanguage();
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const softSkillsRef = useRef();

  const lorem = "Lorem ipsum";

  useEffect(() => {
    function handleEscKey(e) {
      if (e.key === "Escape") {
        setShowSoftSkills(false);
      }
    }

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const handleMouseClick = (e) => {
    if (softSkillsRef.current && !softSkillsRef.current.contains(e.target)) {
      setShowSoftSkills(false);
    }
  };

  useEffect(() => {
    if (showSoftSkills) {
      document.addEventListener("mousedown", handleMouseClick);
    }
    return () => document.removeEventListener("mousedown", handleMouseClick);
  }, [showSoftSkills]);

  return (
    <>
      <div className="flex justify-center md:justify-start font-fira">
        <button
          className="bg-mainBlue text-black p-2 px-3 rounded-xl font-medium transition duration-400 hover:scale-110 font-fira text-md md:text-lg focus:outline-none"
          onClick={() => setShowSoftSkills(true)}
        >
          Soft skills
        </button>
        {showSoftSkills && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-75"
              onClick={() => setShowSoftSkills(false)}
            ></div>
            <div className="relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 my-2 mx-auto pt-16">
              <div
                ref={softSkillsRef}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                <div className="flex items-start justify-between border-b p-5 border-solid border-blueGray-200 rounded-t">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Soft skills
                    </h3>
                    <p className="text-gray-500 text-justify text-sm pt-4">
                      {translations[currentLanguage].softSkillsSubtitle}
                    </p>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowSoftSkills(false)}
                  ></button>
                </div>
                <div className="relative p-6 flex-auto text-balance ">
                  <div className="grid grid-cols-2 gap-4 items-center md:place-items-center">
                    {Array.from({ length: 8 }, (_, i) => (
                      <div key={i} className="group relative">
                        <p className="font-medium">{`${lorem}`}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-mainBlue text-black font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSoftSkills(false)}
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

export default SoftSkillsModal;
