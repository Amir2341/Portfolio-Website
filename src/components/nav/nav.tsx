import { FC } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "styled-components";
import { TiSpanner } from "react-icons/ti";

const Nav: FC = () => {
  const [activeNav, setActiveNav] = useState("/");

  const linkStyle = {
    background: "transparent",
    padding: "0.9rem",
    display: "flex",
    borderRadius: "50%",
    fontSize: "1.1rem",
  };

  return (
    <nav>
      <Link
        style={linkStyle}
        className={activeNav === "/" ? "active" : ""}
        to="/"
      >
        <AiOutlineHome />
      </Link>
      <Link
        style={linkStyle}
        onClick={() => setActiveNav("/about")}
        className={activeNav === "/about" ? "active" : ""}
        to="/skills"
      >
        <TiSpanner />
      </Link>
      <Link
        style={linkStyle}
        onClick={() => setActiveNav("/experience")}
        className={activeNav === "/experience" ? "active" : ""}
        to="/about"
      >
        <AiOutlineUser />
      </Link>
      <Link
        style={linkStyle}
        onClick={() => setActiveNav("/projects")}
        className={activeNav === "/projects" ? "active" : ""}
        to="/projects"
      >
        <AiOutlineBook />
      </Link>
      <Link
        style={linkStyle}
        onClick={() => setActiveNav("/contact")}
        className={activeNav === "/contact" ? "active" : ""}
        to="/contact"
      >
        <AiOutlineMessage />
      </Link>
    </nav>
  );
};
export default Nav;
