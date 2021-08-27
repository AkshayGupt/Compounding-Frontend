import React, { useState } from "react";
import { CardContainer, VCardChip } from "./Virtual-card-styles";
import "./style.css";
import Tilt from "react-tilt";

const VirtualCard = () => {
  const [cardInfo, setCardInfo] = useState({
    number: "5464 5654 5654 6454",
    expiryDate: "01/23",
    cardholderName: "Test User",
  });

  return (
    <Tilt className="Tilt" options={{ max: 20 }}>
      <CardContainer className="CardContainer">
        <div
          style={{
            lineHeight: "12px",
          }}
        >
          <div
            style={{
              fontWeight: "bolder",
            }}
          >
            Compounding
          </div>
          <small
            style={{
              fontSize: "0.7rem",
            }}
          >
            Super Card
          </small>
        </div>

        <VCardChip className="VCardChip">
          <img src="images/card/chip-card.png" alt="chip" />
          <span>Titanium</span>
        </VCardChip>
        <div className="VCardNumber">{cardInfo.number}</div>

        <div className="VCardFooter">
          <div className="VCardDate">
            <small>Valid Thru:</small> {cardInfo.expiryDate}
          </div>
          <div className="VCardHolderName">{cardInfo.cardholderName}</div>
          <div className="VCardType">
            <img
              style={{
                width: "50px",
              }}
              src="images/card/card-type.png"
              alt="type"
            />
          </div>
        </div>
      </CardContainer>
    </Tilt>
  );
};

export default VirtualCard;
