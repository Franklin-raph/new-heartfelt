// scroll to top on page change

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GetToTopOnRender() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
}
