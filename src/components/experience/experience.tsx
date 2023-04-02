import { FC } from "react";
import "./experience.css";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import AnimatedPage from "../animate/animatepage";

const Experience: FC = () => {
  return (
    <AnimatedPage>
      <section>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img
                src="https://browserstack.wpenginepowered.com/wp-content/uploads/2019/07/best-test-automation-frameworks@2x.png"
                alt="moon"
              ></img>
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <MdOutlineLibraryAddCheck className="about__icon" />
                <h5>Projects</h5>
                <small>6 Projects Completed</small>
              </article>
            </div>
            <p>
              I decided to start my developer journey, and change careers, in
              order to have the opportunity to face new challenges, learn new
              skills and be able to create applications which can improve
              people's day to day lives. I attended Northcoders full stack
              software development bootcamp in order to achieve this.
              Northcoders is an industry led bootcamp, which teaches the skills
              required to effeciently work in any Junior Software Development
              Role.
            </p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Experience;
