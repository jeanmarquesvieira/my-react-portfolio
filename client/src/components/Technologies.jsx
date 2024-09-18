import salesforce from "../img/technologies/salesforce.png";
import javascript from "../img/technologies/js.png";
import react from "../img/technologies/react.png";
import nodejs from "../img/technologies/nodejs.png";
import html from "../img/technologies/html.png";
import css from "../img/technologies/css.png";
import tailwind from "../img/technologies/tailwind.png";
import c from "../img/technologies/C_programming_resized.png";

const Technologies = () => {
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

  return (
    <>
      <div className="relative my-2 mx-auto pt-20 sm:pt-24">
        <div className="flex justify-center md:justify-start font-fira">
          <div className="grid grid-cols-4 space-y-5 space-x-3 sm:space-x-8 place-items-baseline lg:flex md:flex-1">
            {languagesSrc.map((lang, id) => (
              <div
                key={id}
                className="group relative mr-8 mt-6 sm:mt-5 sm:mr-3 md:ml-1"
              >
                <img
                  className="max-w-14 sm:max-w-16 transition-transform duration-200 transform md:hover:scale-125"
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
      </div>
    </>
  );
};

export default Technologies;
