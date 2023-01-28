"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true, {
    classNameDark: "dark",
  });
  return (
    <button className="text-gray-11 w-6 h-6" onClick={darkMode.toggle}>
      {darkMode.value ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export { DarkModeToggle };
