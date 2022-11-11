import { FaJediOrder } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";
import laserSwords from "../../assets/svg/laserSwords.svg";

type SwitchProps = {
  onSwitch: () => void;
  isDarkMode: boolean;
};

export const Switch = ({ onSwitch, isDarkMode }: SwitchProps) => {
  return (
    <div className="flex items-center">
      <img src={laserSwords} alt="Laser Swords" className="w-8" />
      <label className="relative flex justify-between items-center mr-2 -ml-2">
        <span className="sr-only"></span>
        <input
          type="checkbox"
          className="absolute left-0 top-0 w-full h-full peer appearance-none"
          onChange={onSwitch}
          checked={isDarkMode}
        />
        <span
          className="bg-cyan-500 w-11 h-7 rounded-full flex flex-shrink-0 items-center 
    after:bg-white after:w-5 after:h-5 after:rounded-full after:ml-1 p-1 dark:peer-checked:bg-red-700
    peer-checked:after:translate-x-4 ease-in-out duration-300 after:duration-300 ml-4"
        ></span>
      </label>
      <FaGalacticRepublic className="text-3xl text-red-700" />
    </div>
  );
};
