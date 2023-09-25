import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-bgImg-container">
      <main className="home">
        <h3>Hi! My Name Is</h3>
        <h1 className="home__name">
          Yusuf <span className="home__name--last">Balı</span>
        </h1>
        <h2>Frontend Web Developer</h2>
      </main>
    </div>
  );
};

export default Home;
