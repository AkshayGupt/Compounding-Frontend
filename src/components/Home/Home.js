import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Link
          className="game-title btn btn-info btn-block"
          to="/transactions"
          style={{ width: "80%" }}
        >
          Track my expenses <i className="fas fa-coins"></i>
        </Link>
        <br />
        <Link
          className="game-title btn btn-info btn-block"
          to="/youtube"
          style={{ width: "80%" }}
        >
          Learn and Earn <i class="fas fa-graduation-cap"></i>
        </Link>

        <div className=" leaderboard-card card my-2 pt-4 px-2 mx-auto" style={{width:"95%", background:"white"}}>
          <h4>Leaderboard</h4>
          <i style={{fontSize:"30px"}} class="fas fa-trophy p-2"></i>
          <div className="d-flex justify-content-around mb-3 text-white" style={{background:"#6e48aa"}}>
            <p style={{border:"0px solid black"}} className="my-auto">
              Points <i class="fas fa-chevron-down"></i>
            </p >
            <p className="my-auto">
              Global <i class="fas fa-chevron-down"></i>
            </p>
            <p className="my-auto">
              Season <i class="fas fa-chevron-down"></i>
            </p>
          </div>
          <ul>
            <li className="d-flex justify-content-between pr-5 pl-1">
              <p className="bg-warning px-3" style={{borderRadius:"10px"}}>#1</p>
              <p>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://w7.pngwing.com/pngs/590/236/png-transparent-computer-icons-man-icon-recruiter-business-desktop-wallpaper-thumbnail.png"
                />
                <span className="pl-2 pr-1">Akshay</span>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://w7.pngwing.com/pngs/908/509/png-transparent-flag-of-india-computer-icons-indian-flag-rectangle-orange.png"
                />
              </p>
              <p>8965</p>
            </li>
            <li className="d-flex justify-content-between pr-5 pl-1">
              <p  className=" px-3" style={{borderRadius:"10px",background:"silver"}}>#2</p>
              <p>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://cdn.iconscout.com/icon/free/png-512/football-player-1426973-1208513.png"
                />
                <span className="pl-2 pr-1">Shivam</span>
                <img
                  style={{
                    height: "32px",
                  }}
                  src="https://icons.iconarchive.com/icons/wikipedia/flags/512/US-United-States-Flag-icon.png"
                />
              </p>
              <p>8965</p>
            </li>
            <li className="d-flex justify-content-between pr-5 pl-1">
              <p  className=" px-3" style={{borderRadius:"10px",background:"#CD7F32"}}>#3</p>
              <p>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5zBl8h0MsaBn6DCwTZLz9qVRy3EaeK_Neg&usqp=CAU"
                />
                <span className="pl-2 pr-1">Vaarun</span>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://w7.pngwing.com/pngs/908/509/png-transparent-flag-of-india-computer-icons-indian-flag-rectangle-orange.png"
                />
              </p>
              <p>8965</p>
            </li>
            <li className="d-flex justify-content-between pr-5 pl-1">
              <p className=" px-3" style={{borderRadius:"10px",background:"white"}}>#4</p>
              <p>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://w7.pngwing.com/pngs/590/236/png-transparent-computer-icons-man-icon-recruiter-business-desktop-wallpaper-thumbnail.png"
                />
                <span className="pl-2 pr-1">Gourav</span>
                <img
                  style={{
                    height: "21px",
                  }}
                  src="https://i.pinimg.com/originals/62/2b/89/622b892bb6997df9ac5e5490b4876c33.jpg"
                />
              </p>
              <p>8965</p>
            </li>
            <li className="d-flex justify-content-between pr-5 pl-1">
              <p className=" px-3" style={{borderRadius:"10px",background:"white"}}>#5</p>
              <p>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png"
                />
                <span className="pl-2 pr-1">Dheeraj</span>
                <img
                  style={{
                    height: "23px",
                  }}
                  src="https://w7.pngwing.com/pngs/908/509/png-transparent-flag-of-india-computer-icons-indian-flag-rectangle-orange.png"
                />
              </p>
              <p>8965</p>
            </li>
          </ul>
        </div>

{/*      
        <div className="content-item">
          <BarGraph />
        </div> */}

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
