import { useState, useEffect } from "react";


export function useMediaQuery(query) {
  // Initialize state based on the current query match
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    function handleChange(e) {
      setMatches(e.matches);
    }

    matchQueryList.addEventListener("change", handleChange);

    // Clean up the event listener when the component unmounts
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]); // Re-run effect if query changes

  return matches;
}

  // export function useMediaQuery(query) {

  //   const [matches, setMatches] = useState(true);
    
  //   useEffect(() => {

  //     const matchQueryList = window.matchMedia(query);

  //     function handleChange(e) {
  //       setMatches(e.matches);
  //     }

  //     matchQueryList.addEventListener("change", handleChange);
      
  //     return () => {
  //       matchQueryList.removeEventListener("change", handleChange);
  //     };

  //   }, [query]);
    
  //   return matches;
  // }