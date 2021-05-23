import React from "react";
import HeroSection from "../../components/Header";
import "./HomePage.css";
import ResourcesCard from "../../components/ResourcesCards";
const HomePage = () => {
  return (
    <div>
      <HeroSection className="home" />
      <ResourcesCard />
    </div>
  );
};

export default React.memo(HomePage);
