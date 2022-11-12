import { useEffect, useMemo } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import useDarkMode from "./hooks/useDarkMode";
import { Home } from "./modules/Home";
import { fetchImages } from "./services/api/fetchImages";
import { BACKGROUND } from "./styles/background";
import { ImagesType } from "./types/ImagesType";

function App() {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    let mode = document.getElementById("darkModeToggler");
    if (mode && isDarkMode) {
      mode.classList.value = "dark";
      return;
    } else if (mode && !isDarkMode) {
      mode.classList.value = "light";
    }
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
