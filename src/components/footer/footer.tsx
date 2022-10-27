import { FC } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";

const LinkWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: auto 0 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Footer: FC = () => {
  return (
    <footer>
      <LinkWrapper>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </LinkWrapper>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/amir-rafiq-3092b8197/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Amir2341" target="_blank">
          <FaGithubSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Amir Rafiq. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
