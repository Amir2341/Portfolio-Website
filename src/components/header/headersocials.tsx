import { FC } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
const HeaderSocials: FC = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
