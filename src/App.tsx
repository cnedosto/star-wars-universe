import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { Loader } from "./components/Loader/Loader";
import { MovieCard } from "./components/MovieCard/MovieCard";
import { Navbar } from "./components/Navbar/Navbar";
import useDarkMode from "./hooks/useDarkMode";
import { Home } from "./modules/Home";
import { fetchMovies } from "./services/api/fetchMovies";
import { BACKGROUND } from "./styles/background";

function App() {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    let mode = document.getElementById("darkModeToggler");
    if (mode && isDarkMode) {
      mode.classList.value = "dark";
      return;
    }
    mode.classList.value = "light";
  }, [isDarkMode]);

  return (
    <div
      className={`${BACKGROUND.default} ${BACKGROUND.light} ${BACKGROUND.dark}`}
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
