import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick} className="flex justify-center">
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
