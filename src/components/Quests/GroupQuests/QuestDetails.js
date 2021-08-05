import React from "react";
import icon from "../../../monster_icons/2.png";
const QuestDetails = ({
  name = "Rakesh Roshan",
  questName = "Summer Quest",
  level = "12",
}) => {
  const showMonsterDetails = () => {
    return (
      <div className="card mb-3 shadow p-3  bg-body rounded">
        <div className="container">
          <div className="row">
            <div className="col text-center pt-3">
              <img
                src={icon}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "90%", maxWidth: "70%", width: "100px" }}
              />
            </div>

            <div className="col">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <p className="card-text">
                  <small className="text-muted">Level {level}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const showNarrativeAndDescription = () => {
    return (
      <div className="card mb-3 p-5 text-center shadow p-3 mb-5 bg-body rounded">
        <h3>Narration</h3>
      </div>
    );
  };

  const showStatsUpdate = () => {
    return (
        <div className="card  p-1 shadow-lg p-3 mb-5 bg-body rounded">
            <p> Stats Update</p>
            <img 
            height="300px"
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/35736722/596be81bf67c698a4c9fa56591c4f7196478f71b.png"/>
        </div>
    );
  };

  const showOfferThatUnlocks = () => {
    return (
        <div className="card p-1 shadow-lg p-3 mb-5 bg-body rounded">
            <p> Offers that unlocks</p>
            <img
             height="300px"
            src="https://www.gamerefinery.com/wp-content/uploads/2020/06/Piggy-Bank-2.jpg"
            />
        </div>
    );
  };

  return (
    <div className="container">
      <h2 className="text-center mb-5 p-3">{questName}</h2>

      {showMonsterDetails()}
      {showNarrativeAndDescription()}
      {/* <div className="container"> */}
        <div className="row">
          <div  className="col-md-6 col-sm-12">{showStatsUpdate()}</div>
          <div className="col-md-6 col-sm-12">{showOfferThatUnlocks()}</div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default QuestDetails;
