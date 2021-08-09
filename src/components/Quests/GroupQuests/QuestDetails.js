import React from "react";
import icon from "../../../monster_icons/2.png";
import "./QuestDetails.css";
import { useHistory } from "react-router-dom";

const QuestDetails = () => {
  const history = useHistory();

  return (
    <div className="questDetails__main-screen">
      <div className="select-quest-header">
        <h5
          className="groupQuest__h5"
          style={{ fontSize: "25px", fontFamily: "fantasy" }}
        >
          Quest Details
        </h5>
      </div>
      <div className="select-quest-body">
        <div className="card groupQuest__card avatar">
          <img
            src="images/avatars/Avatar1_cooldude.png"
            style={{ borderRadius: "50%" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title groupQuest__card-title groupQuest__h5 groupQuest__card-title"
              style={{ color: "#F5F8FB", borderRadius: "10px" }}
            >
              john
            </h5>
            <p className="card-text">Age : 24</p>
            <p className="card-text">Gender : Male</p>
            <p className="card-text">Level : 11</p>
          </div>
        </div>
        <div className="card groupQuest__card Narration">
          <h5
            className="groupQuest__h5"
            style={{
              fontSize: "25px",
              fontFamily: "fantasy",
              backgroundColor: " #6e48aa",
            }}
          >
            Narration
          </h5>
          <div className="card-body">
            <p className="card-text">
              You are a successful investment banker living in a huge mansion in
              Mumbai. You drive a different car everyday from your your luxury
              car collection. But fortune hasn’t been kind to your lately. Due
              to some really bad investments, your financial situation is now
              hanging by a shoe string. You thought that your good times have
              come to an end until you came across a genie. He promised to
              change your life forever.
            </p>
          </div>
          <div
            className="card-footer"
            style={{ backgroundColor: " #6e48aa" }}
          ></div>
        </div>

        <div className="card groupQuest__card h-100 mb-4 Narration">
          <h5
            className="groupQuest__h5"
            style={{
              fontSize: "25px",
              fontFamily: "fantasy",
              backgroundColor: " #6e48aa",
            }}
          >
            Stats
          </h5>
          <div className="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Assets :60+</li>
              <li class="list-group-item">Contingencies : 30+ </li>
              <li class="list-group-item">Awareness : 103+</li>
              <li class="list-group-item">Health : 70+</li>
              <li class="list-group-item">Debt : 31+</li>
            </ul>
          </div>
        </div>
        <a
          href="#"
          className="btn btn-primary mt-2"
          onClick={() => {
            history.push("/fixed-deposit");
          }}
        >
          Chat
        </a>
        <div className="card groupQuest__card h-100 Narration">
          <h5
            className="groupQuest__h5"
            style={{
              fontSize: "25px",
              fontFamily: "fantasy",
              backgroundColor: " #6e48aa",
            }}
          >
            Offers
          </h5>
          <div className="card-body">
            <img
              src="images/offers/boat.jpg"
              style={{ width: "100%", height: "100%" }}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestDetails;
