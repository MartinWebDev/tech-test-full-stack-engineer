import { useState, useEffect } from "react";

/**
 * I totally didn't steal this straight from the React-Conf video :P
 * I saw no need to work out my own solution when this demo works so well :)
 * @param {String} query 
 */
const useMedia = (query) => {
    let [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        let media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        let listener = () => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [query]);

    return matches;
};

export { useMedia };
