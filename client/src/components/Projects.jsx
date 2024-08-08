import { useLanguage } from "../LanguageSource";
import { Link } from "react-router-dom";
import spotify from "../img/spotify.png";

const Projects = () => {
  const { currentLanguage, translations } = useLanguage();

  return (
    <>
      <div className="flex h-screen justify-center items-center font-fira">
        <div class="m-auto w-full max-w-sm p-4 border-mainBlue rounded-lg shadow sm:p-6 border-4 border-solid bg-secondaryBlue borderd-rounded-lg mt-24">
          <h5 class="mb-3 text-base font-extrabold text-gray-900 md:text-xl">
            {translations[currentLanguage].projects}
          </h5>
          <p class="text-sm font-normal text-gray-800">
            {translations[currentLanguage].projsDesc}
          </p>
          <ul class="my-4 space-y-3">
            <li>
              <Link
                to="./spotify"
                className="flex text-gray-800 items-center p-3 text-base font-semibold rounded-lg bg-mainBlue hover:bg-sky-900 group hover:shadow hover:text-gray-400"
              >
                <img src={spotify} className="w-6 mr-2" alt="Spotify" />
                Spotify Player
              </Link>
            </li>
            <li>
              <Link
                to="./spotify"
                className="flex text-gray-800 items-center p-3 text-base font-semibold rounded-lg bg-mainBlue hover:bg-sky-900 group hover:shadow hover:text-gray-400"
              >
                <img
                  src={spotify}
                  className="opacity-0 w-6 mr-2"
                  alt="Spotify"
                />
                Lorem ipsum
              </Link>
            </li>
            <li>
              <Link
                to="./spotify"
                className="flex text-gray-800 items-center p-3 text-base font-semibold rounded-lg bg-mainBlue hover:bg-sky-900 group hover:shadow hover:text-gray-400"
              >
                <img
                  src={spotify}
                  className="opacity-0 w-6 mr-2"
                  alt="Spotify"
                />
                Lorem ipsum
              </Link>
            </li>
            <li>
              <Link
                to="./spotify"
                className="flex text-gray-800 items-center p-3 text-base font-semibold rounded-lg bg-mainBlue hover:bg-sky-900 group hover:shadow hover:text-gray-400"
              >
                <img
                  src={spotify}
                  className="opacity-0 w-6 mr-2"
                  alt="Spotify"
                />
                Lorem ipsum
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
