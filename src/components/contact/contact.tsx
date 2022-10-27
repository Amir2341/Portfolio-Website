import { FC } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import AnimatedPage from "../animate/animatepage";

const Contact: FC = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ln32qok",
        "template_n9b1kpu",
        form.current!,
        "hz6i37gHc-SstpWZ9"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <AnimatedPage>
      <section>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>amirrafiq24@gmail.com</h5>
              <a href="mailto:amirrafiq24@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <BsLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>Amir Rafiq</h5>
              <a
                href="https://www.linkedin.com/in/amir-rafiq-3092b8197/"
                target="_blank"
              >
                Connect
              </a>
            </article>
            <article className="contact__option">
              <FaGithubSquare className="contact__option-icon" />
              <h4>Github</h4>
              <h5>Amir2341</h5>
              <a href="https://github.com/Amir2341" target="_blank">
                Check Out
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            ></input>
            <textarea
              name="message"
              cols={30}
              rows={7}
              placeholder="Your message"
              required
            ></textarea>
            <motion.button
              initial={{ scale: 1 }}
              animate={{ scale: 1.5 }}
              exit={{ scale: 1 }}
              transition={{ delay: 1 }}
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
