import React from "react";
import "./About.scss";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import javascript from "../../assets/img/javascript.png";
import reactImage from "../../assets/img/react.png";
import nextjs from "../../assets/img/nextjs.png";
import github from "../../assets/img/github.png";
import tailwind from "../../assets/img/tailwind.png";
import redux from "../../assets/img/redux.png";
import mui from "../../assets/img/mui.png";

const About = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },

    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 9,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-500",
    },

    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
  ];
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
      <div name="experience">
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Techinal Skills
            </p>
            <p className="py-6">
              These are the technologies I've worked with and used them in my
              projects.
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
