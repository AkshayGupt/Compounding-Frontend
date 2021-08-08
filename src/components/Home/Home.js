import React from "react";
import "./Home.css";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BarGraph from "./bar-graph";

const Home = () => {
  const userStats = {
    health: 100,
    assets: 75,
    contingencies: 47,
    debt: 74,
    awareness: 54,
  };

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
              label={`${userStats.contingencies}`}
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
          <img
            className="monster-img"
            src="/images/monsters/monster-2.jpg"
            alt="monster"
          />
          <div className="game-title">Kill monster</div>
        </div>
        <div className="centre-item expense-tracker">
          <img
            className="coin-animated-img"
            src="/images/expense-tracker.gif"
            alt="expense-tracker"
          />
          <Link className="game-title" to="/transactions">
            Expense Tracker
          </Link>
        </div>
      </div>
      <div className="main-content">
        <div className="content-item">
          <BarGraph />
        </div>
        <div className="content-item">
          <img
            className="bigImages"
            src="/images/offers/watch_offer.jpeg"
            alt="test"
          />
        </div>
        <div className="content-item">Offers and savings</div>
        <div className="content-item">Investments opportunities</div>
      </div>
    </div>
  );
};

export default Home;
