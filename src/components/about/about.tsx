import { FC } from "react";
import "./about.css";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiPostgresql,
  SiFirebase,
  SiJest,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { IoLogoReact, IoLogoCss3 } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { MdOutlineSchema } from "react-icons/md";
import AnimatedPage from "../animate/animatepage";

const About: FC = () => {
  return (
    <AnimatedPage>
      <section>
        <h5>What Skills I Have</h5>
        <h2>Technologies</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <IoLogoJavascript className="experience__details-icon" />
                <div>
                  <h4>Javascript</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiTypescript className="experience__details-icon" />
                <div>
                  <h4>Typescript</h4>
                </div>
              </article>
              <article className="experience__details">
                <IoLogoReact className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                </div>
              </article>
              <article className="experience__details">
                <TbBrandReactNative className="experience__details-icon" />
                <div>
                  <h4>React Native</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiNextdotjs className="experience__details-icon" />
                <div>
                  <h4>Next.js</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiRedux className="experience__details-icon" />
                <div>
                  <h4>Redux</h4>
                </div>
              </article>
              <article className="experience__details">
                <AiOutlineHtml5 className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                </div>
              </article>
              <article className="experience__details">
                <IoLogoCss3 className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiTailwindcss className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaNodeJs className="experience__details-icon" />
                <div>
                  <h4>Node.js</h4>
                </div>
              </article>
              <article className="experience__details">
                <IoLogoJavascript className="experience__details-icon" />
                <div>
                  <h4>Express</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiPostgresql className="experience__details-icon" />
                <div>
                  <h4>PostgreSQL</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiMongodb className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                </div>
              </article>
              <article className="experience__details">
                <MdOutlineSchema className="experience__details-icon" />
                <div>
                  <h4>Mongoose</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiFirebase className="experience__details-icon" />
                <div>
                  <h4>Firebase</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiJest className="experience__details-icon" />
                <div>
                  <h4>Jest</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
