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
      <div className="main-content">
        <div className="content-item">
          <BarGraph />
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
