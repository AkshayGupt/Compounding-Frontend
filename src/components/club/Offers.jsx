import React from "react";
import DisplayScore from "../score/score";
import "./Offers.css";

export default function OffersComponent() {
  return (
    <div className="main-container">
      <div>
        <div className="rewards_header">
          <h5 style={{ fontSize: 25, fontWeight: "bold", fontFamily: "serif" }}>
            Rewards
          </h5>
        </div>
        <div className="reward_displayScore_container">
          <DisplayScore coin={0} diamond={0} />
        </div>
      </div>

      <h5 className="section-header"> Assured mystery rewards</h5>
      <div className="box-container">
        <img
          className="bigImages"
          src="/images/offers/amazon-pay-giftcard.jpg"
          alt="test"
        />
        <img className="smallImages" src="/images/offers/boat.jpg" alt="test" />
        <img
          className="smallImages"
          src="/images/offers/audible.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/myntra.jpg"
          alt="test"
        />
        <img className="smallImages" src="/images/offers/ajio.jpg" alt="test" />
      </div>

      <h5 className="section-header"> Only till mid night</h5>
      <div className="box-container">
        <img
          className="bigImages"
          src="/images/offers/saregama.jpeg"
          alt="test"
        />
        <img
          className="bigImages"
          src="/images/offers/watch_offer.jpeg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/skin-sci.jpeg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/coolwink.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/bewakoof.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/zomato.jpg"
          alt="test"
        />
      </div>
    </div>
  );
}
