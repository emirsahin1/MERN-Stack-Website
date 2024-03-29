import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**Component Scrolls the page to the top */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}