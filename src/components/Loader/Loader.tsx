import { GiDeathStar } from "react-icons/gi";
import starFighter from "../../assets/svg/starFighter.svg";
import useDarkMode from "../../hooks/useDarkMode";

export const Loader = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {isDarkMode ? (
        <GiDeathStar className="animate-bounce text-8xl" />
      ) : (
        <img
          src={starFighter}
          alt="Rebel Star Fighter"
          className="h-24 w-24 animate-bounce"
        />
      )}
    </div>
  );
};
