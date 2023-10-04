import React from "react";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about-bgImg-container">
        <div className="about__bio-image">
          <h2>BIO</h2>
          <p>
            As a frontend developer, nearly a year of focused education and a
            strong commitment to self-improvement through hands-on projects have
            been integral to my growth. During this time, active participation
            in personal and collaborative projects has been instrumental in
            skill enhancement in web development. Passionate about code
            composition and the creation of responsive designs, my aptitude for
            swiftly grasping new concepts and technologies is well-acknowledged.
            This proficiency enables the development of innovative solutions for
            intricate problems. Eager to continually acquire knowledge, various
            technologies, tools, and libraries are consistently explored.
            Primary interests encompass frontend and web development, where
            skills in HTML, CSS, JavaScript, and React have been diligently
            refined. The pursuit of knowledge excites me, and a lifelong
            learning mindset is embraced.
          </p>
        </div>
      </div>

      <main className="about">
        <div className="about__container">
          <div className="about__job">
            <h2 className="text-secondary">Sep 2023 - Present</h2>
            <h3>BudunAI</h3>
            <h6>Intern FrontEnd Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">Sep 2022 – Present</h2>
            <h3>
              Special Education and Rehabilitation Center, Ankara (Part Time){" "}
            </h3>
            <h6>Physiotherapist</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">Sept 2020 - July 2021</h2>
            <h3>Hacettepe University</h3>
            <h6>Intern Physiotherapist</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
