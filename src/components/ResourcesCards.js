import React from "react";
import "./ResourcesCards.css";
import CardItem from "./ResourcesCardItem";
import who from "../assets/who1.png";
import ar from "../assets/ar.jpg";
import wcl from "../assets/wcl.png";
import mho from "../assets/mho.png";
import dar from "../assets/dar.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Resources</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={who}
              text="The World Health Organization is a specialized agency of the United Nations responsible for international public health."
              label="WHO website"
              path="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            />
            <CardItem
              src={ar}
              text="Aarogya Setu is a mobile application developed by the Government of India to connect essential health services with the people of India in our combined fight against COVID-19."
              label="Aarogya setu App"
              path="https://www.aarogyasetu.gov.in/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={wcl}
              text="People lack access to health commodities and adequate medical infrastructure at rural settings."
              label="wecarelife.in"
              path="https://wecarelife.in/"
            />
            <CardItem
              src={mho}
              text="MINISTRY OF HEALTH & FAMILY WELFARE"
              label="MOHFW website"
              path="https://main.mohfw.gov.in/department-health-and-family-welfare-directory"
            />
            <CardItem
              src={dar}
              text="The NGO-DARPAN lists the number of VOs/NGOs in India based on self-declared information. "
              label="NGO Darpan Website"
              path="https://ngodarpan.gov.in/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
