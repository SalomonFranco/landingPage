import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-center px-8 py-[72px]">
      <div className="pb-4">
        <span className="text-2xl font-light text-gray md:text-5xl">Casa </span>
        <span className="text-very-dark-blue text-2xl font-bold md:text-5xl">Blanca</span>
      </div>
      <div>
        <span className="text-very-dark-blue text-xs font-light md:text-xl">Como “The White House” pero más degenerados
        </span>
      </div>
    </header>
  );
};

export default Header;
