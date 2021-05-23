import React from "react";
import { Button } from "./Button";
import "./Header.css";
import { useHistory } from "react-router-dom";
import v from "../assets/v1.mp4";

function HeroSection() {
  const history = useHistory();
  return (
    <div className="hero-container">
      <video src={v} autoPlay loop muted />
      <h1>GOT A LEAD ?</h1>
      <p>Help others by sharing it with us</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => history.push("/findLeads")}
        >
          Find Leads
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => history.push("/addLeads")}
        >
          Add Leads
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
