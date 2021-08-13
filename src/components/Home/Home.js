import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BarGraph from "./bar-graph";
import CarouselComponent from "./carousel";
import createPersistedState from "use-persisted-state";
import DistributedTreeMap from "./distributed-tree-map";
import DisplayScore from "../score/score";
import "./Home.css";

const useSelectedAvatarState = createPersistedState("selectedAvatar");

const Home = () => {
  const [userStats, setUserStats] = useState({
    health: 83,
    assets: 75,
    contingencies: 47,
    debt: 74,
    awareness: 54,
  });

  const [avatar, setAvatar] = useSelectedAvatarState();
  const selectAvatarPath = "/images/avatars/" + avatar + ".png";

  const username = JSON.parse(localStorage.getItem("name"))?.value || "";
  localStorage.setItem("userStats", JSON.stringify(userStats));

  let ignorance = localStorage.getItem("ignorance");
  let lia = localStorage.getItem("lia");
  let risk = localStorage.getItem("risk");

  return (
    <div>
      <div className="home-header">
        <div className="avatar-pic">
          <img
            className="avatar-img"
            src={selectAvatarPath}
            alt="user_avatar"
          />
          <div style={{ paddingTop: 10, fontSize: 15 }}>{username}</div>
          <DisplayScore
            className="home_displayScore_container"
            coin={97}
            diamond={26}
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
      <div className="text-center">
        <div className="center-container2 content-item">
          <div
            className="center-container2 mt-2"
            style={{ width: "95%", margin: "auto" }}
          >
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
              <h6 className="text-success pt-2">
                <i class="fas fa-arrow-up"></i> Rs.{ignorance ? ignorance : 0}{" "}
              </h6>
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
              <h6 className="text-success pt-2">
                <i className="fas fa-fire text-danger"></i> Rs.{lia ? lia : 0}
              </h6>
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
              <h6 className="text-success pt-2">
                <i class="fas fa-chart-line text-info"></i> Rs.{" "}
                {risk ? risk : 0}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <Link className="game-title btn btn-info btn-block" to="/transactions" style={{width:"80%"}}>
          Track my expenses <i className="fas fa-coins"></i>
        </Link>
        <br/>
        <Link className="game-title btn btn-info btn-block" to="/youtube"  style={{width:"80%"}}>
         Learn and Earn <i class="fas fa-graduation-cap"></i>
        </Link>

        <div className="content-item">
          <BarGraph />
        </div>

        <div className="content-item">
          <DistributedTreeMap />
        </div>

        <div className="content-item">
          <img
            className="bigImages"
            src="/images/offers/watch_offer.jpeg"
            alt="test"
          />
        </div>
        <div className="content-item">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
