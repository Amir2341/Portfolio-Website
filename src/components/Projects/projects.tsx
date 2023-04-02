import { FC } from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio7.jpg";
import IMG2 from "../../assets/portfolio8.jpg";
import IMG3 from "../../assets/portfolio9.jpg";
import IMG4 from "../../assets/portfolio10.jpg";
import IMG5 from "../../assets/restaurant.jpg";
import IMG6 from "../../assets/restaurantbackend.jpg";
import AnimatedPage from "../animate/animatepage";

interface IProject {
  data: {
    id: number;
    image: string;
    title: string;
    github: string;
    demo: string;
  }[];
}

const data: IProject["data"] = [
  {
    id: 1,
    image: IMG1,
    title: "NC News API",
    github: "https://github.com/Amir2341/NC-news-project",
    demo: "https://nc-news20.herokuapp.com/api",
  },
  {
    id: 2,
    image: IMG2,
    title: "NC News Front End Website",
    github: "https://github.com/Amir2341/NC-News-FE",
    demo: "https://amir-nc-news.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Scan N Pan App",
    github: "https://github.com/Amir2341/scan-n-pan",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Website",
    github: "https://github.com/Amir2341/Portfolio-Website",
    demo: "https://www.amirsportfolio.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Restaurant Ecommerce Website",
    github: "https://github.com/Amir2341/ecommercerestaurantfrontend",
    demo: "https://stackburger.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "restaurant API",
    github: "https://github.com/Amir2341/ecommercerestaurant",
    demo: "https://restaurantmenu.cyclic.app/menu",
  },
];

const Projects: FC = () => {
  return (
    <AnimatedPage>
      <section>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a className="btn" href={github} target="__blank">
                      Github
                    </a>
                    <a className="btn btn-primary" href={demo} target="__blank">
                      Visit
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Projects;
