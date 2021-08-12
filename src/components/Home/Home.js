import React, { useState } from "react";
import "./Home.css";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BarGraph from "./bar-graph";
import CarouselComponent from "./carousel";

const Home = () => {
  const [userStats, setUserStats] = useState({
    health: 83,
    assets: 75,
    contingencies: 47,
    debt: 74,
    awareness: 54,
  });

  localStorage.setItem("userStats", JSON.stringify(userStats));

  let ignorance =localStorage.getItem("ignorance");
  let lia =localStorage.getItem("lia");
  let risk =localStorage.getItem("risk");

  return (
    <div>
      <div className="home-header">
        <div className="avatar-pic">
          <img
            className="avatar-img"
            src="/images/avatars/game-avatar01.jpg"
            alt="user_avatar"
          />
        </div>
        <div className="game-stats">
          <div className="user-state-detail">
            Assets
            <ProgressBar
              now={userStats.assets}
              label={`${userStats.assets}`}
              variant="danger"
            />
          </div>
          <div className="user-state-detail">
            Contingencies 
            <ProgressBar
              now={userStats.contingencies}
              label={`${userStats.contingencies}%`}
              variant="success"
            />
          </div>
          <div className="user-state-detail">
            Awareness
            <ProgressBar
              now={userStats.awareness}
              label={`${userStats.awareness}`}
              variant="warning"
            />
          </div>
          <div className="user-state-detail">
            Health
            <ProgressBar
              now={userStats.health}
              label={`${userStats.health}%`}
              variant="danger"
            />
          </div>
          <div className="user-state-detail">
            Debt
            <ProgressBar
              now={userStats.debt}
              label={`${userStats.debt}`}
              variant="info"
            />
          </div>
        </div>
      </div>
      <div className="center-container">
        <div className="centre-item">
          <div className="center-item-img-container">
            <img
              className="monster-img"
              src="/images/monsters/monster-4.png"
              alt="monster"
            />
          </div>

          <div className="game-title">Kill monster</div>
        </div>
        <div className="centre-item expense-tracker">
          <div className="center-item-img-container">
            <img
              className="coin-animated-img"
              src="/images/expense-tracker.gif"
              alt="expense-tracker"
            />
          </div>
          <Link className="game-title" to="/transactions">
            Expense Tracker
          </Link>
        </div>
        <div className="centre-item">
          <div className="center-item-img-container">
            <img
              className="learn_earn-img"
              src="/images/learn_earn.png"
              alt="learn_earn"
            />
          </div>
          <Link className="game-title" to="/youtube">
            Learn and Earn
          </Link>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      
      <div className="main-content">
      <div className="content-item">
          <BarGraph />
        </div>
        <div className="center-container2 mt-2" style={{width:"95%",margin:"auto"}}>
        <div className="centre-item mb-3">
          <div className="center-item-img-container">
            <img
              className="monster"
              src="/images/amount-monsters/monster_icons/1.png"
              alt="monster"
              height="90px"
            />
          </div>

          <div className="game-title">Ignorance</div>
          <h6 className="text-success pt-2"><i class="fas fa-arrow-up"></i> Rs.{ignorance?ignorance:0} </h6>
        </div>
        <div className="centre-item expense-tracker mt-3">
          <div className="center-item-img-container">
          <img
              className="monster"
              src="/images/amount-monsters/monster_icons/2.png"
              alt="monster"
              height="60px"
            />
          </div>
          <div className="game-title pt-3">Liability</div>
          <h6 className="text-success pt-2"><i className="fas fa-fire text-danger"></i> Rs.{lia?lia:0}</h6>
            {/* <Link className="game-title pt-3" to="/transactions">
              Liability
            </Link> */}
        </div>
        <div className="centre-item">
          <div className="center-item-img-container">
          <img
              className="monster"
              src="/images/amount-monsters/monster_icons/3.png"
              alt="monster"
              height="60px"
            />
          </div>
          <div className="game-title pt-3">Risk</div>
          <h6 className="text-success pt-2"><i class="fas fa-chart-line text-info"></i> Rs. {risk?risk:0}</h6>
        </div>
      </div>
     

        <div className="content-item">Offers and savings</div>

        <div className="content-item">
          <CarouselComponent />
          Advisory
        </div>
      </div>
    </div>
  );
};

export default Home;
