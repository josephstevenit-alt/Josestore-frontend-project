import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls page to the top whenever route changes.
 */
export default function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
}
