import React, { useEffect, useState } from "react";
import RGBAuthButton from "./RGBAuthButton";
export default function NavBar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const r = document.documentElement;
    dark ? r.classList.add("dark") : r.classList.remove("dark");
  }, [dark]);
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative text-indigo-950 dark:text-white font-medium group"
  >
    <span className="transition-colors group-hover:text-red-500">
      {children}
    </span>
    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 rounded-full transition-all group-hover:w-full"></span>
  </a>
);

  return (
    <header className=" top-0 z-30">
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl grid place-items-center text-white -outline shadow-2xl"></div>
          <span className="text-lg md:text-xl font-extrabold text-indigo-950 dark:text-white px-5 py-2.5">
            ͓̽Q͓̽uickConvert
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#tools">Tools</NavLink>
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            className={`
    px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
    border shadow-sm
    ${
      dark
        ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
        : "bg-white text-black text-gray-900 border-gray-300 hover:bg-gray-100"
    }
  `}
          >
            {dark ? "Dark" : "Light"}
          </button>

          <RGBAuthButton className="px-5 py-2.5 text-xs">Log in</RGBAuthButton>
          <RGBAuthButton className="px-5 py-2.5 text-xs">Sign up</RGBAuthButton>
        </div>
      </nav>
    </header>
  );
}
