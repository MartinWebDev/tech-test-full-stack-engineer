import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Hook based wrapper for react portals. Slightly adopted from example found here: https://github.com/lostclawz/react-use-portal
 * @param {React.ReactNode} children React element that will be rendered inside the portal
 * @param {String} portalId Element ID of the portal entry point
 * @returns {React.ReactPortal}
 */
const usePortal = (children, portalId) => {
    const element = useRef(document.createElement("div"));

    useEffect(() => {
        document.getElementById(portalId).appendChild(element.current);

        return () => document.getElementById(portalId).removeChild(element.current);
    }, []);

    return createPortal(children, element.current);
};

export { usePortal };
