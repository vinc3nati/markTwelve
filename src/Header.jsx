import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;

  const splitLoc = pathname.split("/");

  return (
    <header>
      <h1 className="main-heading">Fun with Triangle</h1>
      <nav className="nav-list">
        <a href="/" className={splitLoc[1] === "" ? "list active" : "list"}>
          Quiz
        </a>
        <a
          href="/is-triangle"
          className={splitLoc[1] === "is-triangle" ? "list active" : "list"}
        >
          Is Triangle?
        </a>
        <a
          href="/hypotenuse"
          className={splitLoc[1] === "hypotenuse" ? "list active" : "list"}
        >
          Hypotenuse
        </a>
        <a
          href="/area-of-triangle"
          className={
            splitLoc[1] === "area-of-triangle" ? "list active" : "list"
          }
        >
          Area of Triangle
        </a>
      </nav>
    </header>
  );
}
