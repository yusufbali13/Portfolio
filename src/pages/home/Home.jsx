import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homepng from "../../assets/img/home-main.svg";
import Type from "./Type";
import "./Home.scss";

import "swiper/css";
import "swiper/css/navigation";
import "../../App.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import htmlPng from "../../assets/img/html.png";
import cssPng from "../../assets/img/css.png";
import javascriptPng from "../../assets/img/javascript.png";
import reactPng from "../../assets/img/react.png";
import tailwindPng from "../../assets/img/tailwind.png";
import muiPng from "../../assets/img/mui.png";
import rateSvg from "../../assets/img/meter1.svg";

function Home() {
  let obje = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "React",
    "Bootstrap",
    "Material UI",
    "Tailwind",
  ];
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content  ">
          <Row className="flex flex-wrap justify-around  ">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Furkan Emin Polat</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <img width={"600px"} src={homepng} alt="homepng" />
          </Row>
        </Container>
      </Container>

      <Swiper
        className="container "
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {obje.map((item, index) => (
          <SwiperSlide className="swiperSlide">
            <div className="" key={index}>
              <img src={rateSvg} alt="" />
              <div className="mt-4 text-2xl font-bold">{item}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Home;
