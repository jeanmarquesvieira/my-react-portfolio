import { useLanguage } from "../LanguageSource";
import { Link } from "react-router-dom";
import spotify from "../img/spotify.png";
import money from "../img/money.png";
import pomodoro from "../img/pomodoro.png";

const Projects = () => {
  const { currentLanguage, translations } = useLanguage();

  return (
    <>
      <div className="flex h-screen justify-center items-center font-fira pt-10">
        <div className="m-8 sm:mb-56 w-full max-w-xl p-4 sm:p-6 border-mainBlue rounded-lg shadow border-4 border-solid bg-secondaryBlue borderd-rounded-lg mb-36">
          <h5 className="mb-3 text-base font-extrabold md:text-center text-gray-900 md:text-xl">
            {translations[currentLanguage].projects}
          </h5>
          <p className="text-sm font-normal text-gray-800">
            {translations[currentLanguage].projsDesc}
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <Link
                to="./spotify"
                className="flex text-gray-800 items-center p-3 text-base font-semibold rounded-lg bg-mainBlue hover:bg-sky-900 group hover:shadow hover:text-gray-400 transition-all duration-300"
              >
                <img src={spotify} className="w-6 mr-2" alt="Spotify" />
                Spotify Player
              </Link>
            </li>
            <li>
              <Link
                to="./financial-tracker"
                className="flex text-gray-800 items-center p-3 text-base font-semibold rounded-lg bg-mainBlue hover:bg-sky-900 group hover:shadow hover:text-gray-400 transition-all duration-300"
              >
                <img src={money} className="w-6 mr-2" alt="Spotify" />
                {translations[currentLanguage].financialTracker}
              </Link>
            </li>
            <li>
              <Link
                to="./pomodoro"
                className="flex text-gray-800 items-center p-3 text-base font-semibold rounded-lg bg-mainBlue hover:bg-sky-900 group hover:shadow hover:text-gray-400 transition-all duration-300"
              >
                <img src={pomodoro} className="w-6 mr-2" alt="Spotify" />
                Pomodoro Timer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
