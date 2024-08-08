import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "../LanguageSource";
import play from "../img/play.png";
import playDisabled from "../img/play_disabled.png";
import pause from "../img/pause.png";

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

  useEffect(() => {
    function handleEnterKey(e) {
      if (e.key === "Enter" && query) {
        handleSearch();
      }
    }

    document.addEventListener("keydown", handleEnterKey);
    return () => document.removeEventListener("keydown", handleEnterKey);
  });

  const handleSearch = async () => {
    if (query.trim()) {
      try {
        await axios.get(`/search?q=${query}`).then((res) => {
          if (res.status === 200) {
            console.log("search");
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

  return (
    <div className="container mx-auto pt-24 sm:pt-28 font-fira">
      <div className="fixed border-4 rounded-lg p-5 lg:mx-36 md:mx-28 mx-10 border-mainBlue shadow">
        <h1 className="text-lg md:text-2xl font-semibold md:font-bold mb-4 md:mb-8 flex justify-center">
          Spotify Player
        </h1>
        <p className="mb-8 text-sm text-justify">
          {translations[currentLanguage].sptfDescription}
        </p>
        <div className="mb-8 md:mb-10 flex justify-center space-x-6">
          <input
            type="text"
            className="border p-2 rounded-lg md:w-5/12 justify-center"
            placeholder={translations[currentLanguage].searchForSong}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mb-4 flex justify-center space-x-6 md:space-x-8">
          <button
            className="bg-mainBlue text-sm md:text-normal text-white py-2 min-w-24 md:min-w-28 rounded-lg hover:scale-105 md:hover:scale-110 hover:shadow-lg"
            onClick={handleSearch}
            disabled={!query.trim()}
          >
            {translations[currentLanguage].searchBtn}
          </button>
          <img
            src={
              trackUri && isSongSearched
                ? play
                : trackUri
                ? pause
                : playDisabled
            }
            className={
              trackUri && isSongSearched
                ? "h-10  hover:cursor-pointer animate-pulse"
                : "h-10"
            }
            onClick={() => {
              if (isPaused) {
                handlePlay();
              } else {
                handlePause();
              }
            }}
            title={translations[currentLanguage].play}
            alt="play"
          />
        </div>
        <div className="fixed inset-x-0 ml-10">
          {showMessage && !isPaused ? (
            <p className="flex text-sm md:text-normal justify-center items-center">{`${beingPlayed}...`}</p>
          ) : isSearchError ? (
            <p className="flex text-sm md:text-normal justify-center items-center">
              {searchError}
            </p>
          ) : isPlayError ? (
            <p className="flex text-sm md:text-normal justify-center items-center">
              {playError}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Spotify;
