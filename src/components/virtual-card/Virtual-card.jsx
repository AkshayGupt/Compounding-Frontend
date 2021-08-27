import React, { useEffect, useState } from "react";
import { CardContainer, VCardChip } from "./Virtual-card-styles";
import "./style.css";
import Tilt from "react-tilt";
import { getCardDetails } from "../../utils/api";

const dummyAccountHolder = "dd95bd39-775e-48de-b352-36cd9b024c74";
var accountHolderId = "" || dummyAccountHolder;

if (localStorage.getItem("data")) {
  accountHolderId = JSON.parse(localStorage.getItem("data"))[
    "accountHolderId"
  ];
}

const VirtualCard = () => {
  const [cardInfo, setCardInfo] = useState({
    maskedPan: "",
    expiryMMYY: "",
    cardholderName: "",
  });

  useEffect(() => {
    getCardDetails(accountHolderId).then((data) => {
      setCardInfo({ ...data });
    });
  }, []);

  return (
    <Tilt className="Tilt" options={{ max: 20 }}>
      <CardContainer
        // data-aos="fade-down"
        // data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="500"
        className="CardContainer"
      >
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
        </VCardChip>
        <div className="VCardNumber">{cardInfo.maskedPan}</div>

        <div className="VCardFooter">
          <div className="VCardDate">
            <small>Valid Thru:</small> {cardInfo.expiryMMYY}
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
