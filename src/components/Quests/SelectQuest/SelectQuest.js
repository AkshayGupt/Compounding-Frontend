import React, { useState } from "react";
import "./SelectQuest.css";
import { useHistory } from "react-router-dom";

const SelectQuest = () => {
  const history = useHistory();

  return (
    <div className="selectQuest__main-screen">
      <div className="select-quest-header">
        <h5
          className="select-quest_h5"
          style={{ fontSize: "25px", fontFamily: "fantasy" }}
        >
          Select Quest
        </h5>
      </div>
      <div className="select-quest-body">
        <div className="card selectQuest__card">
          <img
            src="images/questimages/geniequest.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="select-quest_h5 card-title selectQuest__card-title"
              style={{ color: "#F5F8FB", borderRadius: "10px" }}
            >
              The Banker And The Genie
            </h5>
            <p className="card-text">
            You are a successful investment banker living in a huge mansion in Mumbai. You drive a different car everyday from your your luxury car collection.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ borderRadius: "10px" ,backgroundColor:"#6e48aa"}}
              onClick={() => {
                history.push("/detail-quest");
              }}
            >
              Explore Quest
            </a>
          </div>
        </div>
        <div className="card selectQuest__card">
          <img
            src="images/questimages/sherlock.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title selectQuest__card-title select-quest_h5"
              style={{ color: "#F5F8FB", borderRadius: "10px" }}
            >
              Sherlock And Unicorns
            </h5>
            <p className="card-text">
            There have been many startups which mysteriously turned into unicorns in the last one month. While everyone is busy celebrating the occasion, Sherlock believes something fishy is going on.</p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ borderRadius: "10px" ,backgroundColor:"#6e48aa"}}
            >
              In Progress
            </a>
          </div>
        </div>
        <div className="card selectQuest__card">
          <img
            src="images/questimages/ipo.jpg"
            className="card-img-top"
            
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title selectQuest__card-title select-quest_h5"
              style={{ color: "#F5F8FB", borderRadius: "10px" }}
            >
              The Cursed IPO
            </h5>
            <p className="card-text">
            A mysterious startup that was developing a age-reversing serum for the last ten years, finally launchesld it to a raving success. The shareholders want the IPO to happen as soon as possible. But there is something shocking that is filed in the red herring prospectus.
            </p>
            <a
              href="#"
              className="btn btn-primary"  style={{ borderRadius: "10px",backgroundColor:"#6e48aa" }}
            >
             In Progress
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectQuest;
