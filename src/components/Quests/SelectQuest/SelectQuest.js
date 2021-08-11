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
            src="images/questimages/mutualfund.png"
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
              style={{ borderRadius: "10px" }}
              onClick={() => {
                history.push("/detail-quest");
              }}
            >
              Details
            </a>
          </div>
        </div>
        <div className="card selectQuest__card">
          <img
            src="images/questimages/fixeddeposit.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title selectQuest__card-title select-quest_h5"
              style={{ color: "#F5F8FB", borderRadius: "10px" }}
            >
              Fixed Deposit
            </h5>
            <p className="card-text">
              Fixed deposit allows you to invest your funds for a fixed term and
              earn returns at a fixed interest rate.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ borderRadius: "10px" }}
              onClick={() => {
                history.push("/detail-quest");
              }}
            >
              Details
            </a>
          </div>
        </div>
        <div className="card selectQuest__card">
          <img
            src="images/questimages/invest.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title selectQuest__card-title select-quest_h5"
              style={{ color: "#F5F8FB", borderRadius: "10px" }}
            >
              Stock
            </h5>
            <p className="card-text">
              Investing in stocks just means buying tiny shares of ownership in
              a public company.
            </p>
            <a
              href="#"
              className="btn btn-primary"  style={{ borderRadius: "10px" }}
              onClick={() => {
                history.push("/detail-quest");
              }}
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectQuest;
