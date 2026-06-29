import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Usamos "instant" para que o scroll ocorra de forma imperceptível e imediata na transição de rotas
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
