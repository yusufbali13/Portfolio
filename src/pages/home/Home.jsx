import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Particles from "react-tsparticles";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particles />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Yusuf Balı</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

// import React from 'react'
// import "./Home.scss"
// const Home = () => {
//   return (
//     <div className="home-bgImg-container">
//       <main className="home">
//         <h3>Hi! My name is</h3>
//         <h1 className="home__name"> <span className="home__name--last">Furkan </span>
//           Emin <span className="home__name--last">Polat</span>
//         </h1>
//         <h2>Frontend Web Developer</h2>
//       </main>
//     </div>
//   );
// }

// export default Home
