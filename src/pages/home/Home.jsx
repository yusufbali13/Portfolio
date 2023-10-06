import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homepng from "../../assets/img/home-main.svg";
import Type from "./Type";
import "./Home.scss";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.scss";
import { Swiper, SwiperSlide } from "swiper/react";
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
              <h1
                style={{
                  paddingBottom: 15,
                  minWidth: "500px",
                }}
                className="heading"
              >
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Yusuf Balı</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <img width={"500px"} src={homepng} alt="homepng" />
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
          <SwiperSlide key={index} className="swiperSlide ">
            <div>
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
