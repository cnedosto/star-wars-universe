import { FaRebel } from "react-icons/fa";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Switch } from "../Switch/Switch";

export const Navbar = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <div className="max-w-full  shadow-md bg-white dark:bg-black flex justify-between p-4">
      <h1 className="uppercase text-2xl flex items-center">
        <FaRebel className="mr-4 c-rotate-y" /> Star Wars Universe
      </h1>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row px-4">
          <li className="px-2">Movies</li>
          <li className="px-2">Planets</li>
          <li className="px-2">People</li>
          <li className="px-2">Species</li>
          <li className="px-2">Starships</li>
        </ul>
        <Switch isDarkMode={isDarkMode} onSwitch={toggle} />
      </div>
    </div>
  );
};
