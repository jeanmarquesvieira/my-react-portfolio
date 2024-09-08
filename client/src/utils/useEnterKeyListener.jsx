import { useEffect } from "react";

const useEnterKeyListener = (callback, dependency) => {
  useEffect(() => {
    function handleEnterKey(e) {
      if (e.key === "Enter" && dependency) {
        callback();
      }
    }

    document.addEventListener("keydown", handleEnterKey);

    return () => document.removeEventListener("keydown", handleEnterKey);
  }, [callback, dependency]);
};

export default useEnterKeyListener;
