import React from "react";
import "./score.css";

const DisplayScore = (props) => {
  const { coin, diamond } = props;

  return (
    <div className="scoreContainer">
      <div>{coin}</div>
      <img className="scoreImg" src="/images/gold_coin.png" alt="gold_coin" />
      <div>{diamond}</div>
      <img className="scoreImg" src="/images/diamond.png" alt="diamond" />
    </div>
  );
};

export default DisplayScore;
