import React, { useState } from "react";
import axios from "axios";
import { useLanguage } from "../LanguageSource";
import play from "../img/play.png";
import playDisabled from "../img/play_disabled.png";
import pause from "../img/pause.png";
import pauseDisabled from "../img/pause_disabled.png";
import useEnterKeyListener from "../utils/useEnterKeyListener";

const Spotify = () => {
  const { currentLanguage, translations } = useLanguage();
  const [query, setQuery] = useState("");
  const [trackUri, setTrackUri] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [isPlayError, setIsPlayError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSongSearched, setIsSongSearched] = useState(false);

  const beingPlayed = translations[currentLanguage].beingPlayed;
  const searchError = translations[currentLanguage].searchError;
  const playError = translations[currentLanguage].playError;

  const handleSearch = async () => {
    if (query.trim()) {
      try {
        await axios.get(`/search?q=${query}`).then((res) => {
          if (res.status === 200) {
            setTrackUri(res.data.uri);
            setIsSongSearched(true);
          } else {
            setIsSearchError(true);
          }
        });
      } catch (error) {
        console.error("Search Error:", error);
        setIsSearchError(searchError);
      }
    }
  };

  useEnterKeyListener(handleSearch, query);

  const handlePlay = async () => {
    try {
      await axios.get(`/play?uri=${trackUri}`).then((res) => {
        if (res.status === 200) {
          setShowMessage(true);
          setIsPaused(false);
          setIsSongSearched(false);
        } else {
          setIsPlayError(true);
        }
      });
    } catch (error) {
      console.error("Play Error:", error);
    }
  };

  const handlePause = async () => {
    try {
      await axios.get(`/pause`).then((res) => {
        if (res.status === 200) {
          setShowMessage(true);
          setIsPaused(true);
        } else {
          setIsPlayError(true);
        }
      });
    } catch (error) {
      console.error("Pause Error:", error);
    }
  };
  console.log("trackUri:", trackUri);
  console.log("showMessage", showMessage);
  console.log("isPaused", isPaused);
  console.log("");

  // const upperCase = (query) => {
  //   return query.charAt(0).toUpperCase() + query.slice(1);
  // };

  return (
    // <div className="mx-auto pt-24 sm:pt-28 font-fira">
    <div className="fixed flex justify-center items-center top-12 left-0 right-0 bottom-0 font-fira">
      <div className="fixed rounded-lg p-5 justify-center md:mx-70 mx-10 shadow-xl">
        <h1 className="text-lg md:text-2xl font-semibold md:font-bold mb-4 md:mb-8 flex justify-center">
          Spotify Player
        </h1>
        <p className="mb-2 text-xs md:text-sm text-justify">
          {translations[currentLanguage].sptfDescription}
        </p>
        <p className="mb-8 text-xs md:text-sm text-justify">
          {translations[currentLanguage].sptfDescription2}
        </p>
        <div className="mb-8 md:mb-10 flex justify-center space-x-6">
          <input
            type="text"
            className="border p-2 rounded-lg md:w-5/12 text-xs md:text-sm justify-center focus:outline-none"
            placeholder={translations[currentLanguage].searchForSong}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mb-4 flex justify-center space-x-6 md:space-x-8">
          <button
            className={
              query.trim()
                ? "bg-mainBlue text-sm md:text-normal text-white py-2 min-w-24 md:min-w-28 rounded-lg hover:scale-105 md:hover:scale-110 hover:shadow-lg hover:cursor-pointer focus:hidden duration-300"
                : "bg-mainBlue text-sm md:text-normal text-white py-2 min-w-24 md:min-w-28 rounded-lg"
            }
            onClick={handleSearch}
            disabled={!query.trim()}
          >
            {translations[currentLanguage].searchBtn}
          </button>
          <img
            src={isSongSearched && trackUri ? play : playDisabled}
            className={
              trackUri && isSongSearched
                ? "h-10  hover:cursor-pointer animate-pulse"
                : "h-10"
            }
            onClick={() => handlePlay()}
            title={translations[currentLanguage].play}
            alt="play"
            disabled={play ? false : true}
          />
          <img
            src={
              trackUri && !isPaused && !isSongSearched ? pause : pauseDisabled
            }
            className={!isPaused ? "h-10  hover:cursor-pointer" : "h-10"}
            onClick={() => handlePause()}
            title="Pause"
            alt="pause"
            disabled={trackUri && !isPaused && !isSongSearched ? false : true}
          />
        </div>
        <div className="pb-10 pt-8">
          <div className="fixed inset-x-0">
            {showMessage && !isPaused && trackUri ? (
              <p className="flex text-xs md:text-sm md:text-normal justify-center items-center">{`${beingPlayed}`}</p>
            ) : isSearchError ? (
              <p className="flex text-xs md:text-sm md:text-normal justify-center items-center">
                {searchError}
              </p>
            ) : isPlayError ? (
              <p className="flex text-xs md:text-sm md:text-normal justify-center items-center">
                {playError}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
