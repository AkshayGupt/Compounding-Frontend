import React from "react";
import "./QuestDetails.css";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

// TODO: choose proper colors
const colors = [
  "#2F847C",
  "#C32148",
  "#1F75FE",
  "#109E3B ",
  "#ED6345",
  "#BF59E6 ",
  "#FFC300",
  "#A5446C ",
  "#G32191",
  "#FA8072",
];

const QuestDetails = () => {
  const history = useHistory();
  const currentStats = JSON.parse(localStorage.getItem("userStats"));

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
            <table className="questDetails_stat-table">
              <tr>
                <td className="questDetail__stat_title">Health</td>
                <td className="questDetail__progressbar">
                  <ProgressBar>
                    <ProgressBar
                      style={{ backgroundColor: colors[1] }}
                      label={`${currentStats.health}`}
                      now={currentStats.health}
                      key={1}
                    />
                    <ProgressBar
                      style={{ backgroundColor: colors[2] }}
                      label={`+${10}`}
                      now={10}
                      key={2}
                    />
                  </ProgressBar>
                </td>
              </tr>
              <tr>
                <td className="questDetail__stat_title">Assets</td>
                <td>
                  <ProgressBar>
                    <ProgressBar
                      style={{ backgroundColor: colors[3] }}
                      label={`${currentStats.assets}`}
                      now={currentStats.assets}
                      key={1}
                    />
                    <ProgressBar
                      style={{ backgroundColor: colors[4] }}
                      label={`+${45}`}
                      now={45}
                      key={2}
                    />
                  </ProgressBar>
                </td>
              </tr>
              <tr>
                <td className="questDetail__stat_title">Contingencies</td>
                <td>
                  <ProgressBar>
                    <ProgressBar
                      style={{ backgroundColor: colors[5] }}
                      label={`${currentStats.contingencies}`}
                      now={currentStats.contingencies}
                      key={1}
                    />
                    <ProgressBar
                      style={{ backgroundColor: colors[6] }}
                      label={`+${10}`}
                      now={10}
                      key={2}
                    />
                  </ProgressBar>
                </td>
              </tr>
              <tr>
                <td className="questDetail__stat_title">Debt</td>
                <td>
                  <ProgressBar>
                    <ProgressBar
                      style={{ backgroundColor: colors[7] }}
                      label={`${currentStats.debt}`}
                      now={currentStats.debt}
                      key={1}
                    />
                    <ProgressBar
                      style={{ backgroundColor: colors[8] }}
                      label={`+${15}`}
                      now={15}
                      key={2}
                    />
                  </ProgressBar>
                </td>
              </tr>
              <tr>
                <td className="questDetail__stat_title">Awareness</td>
                <td>
                  <ProgressBar>
                    <ProgressBar
                      style={{ backgroundColor: colors[9] }}
                      label={`${currentStats.awareness}`}
                      now={currentStats.awareness}
                      key={1}
                    />
                    <ProgressBar
                      style={{ backgroundColor: colors[0] }}
                      label={`+${35}`}
                      now={35}
                      key={2}
                    />
                  </ProgressBar>
                </td>
              </tr>
            </table>
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
