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

      const dataToDisplay = {
        maskedPan: data.maskedPan || "6522 3620 4517 9167",
        expiryMMYY: data.expiryMMYY || "12/25",
        cardholderName: data.cardholderName || "9190100970764925",
      };

      setCardInfo({ ...dataToDisplay });
    });
  }, []);

  return (
    <Tilt className="Tilt" options={{ max: 20 }}>
      <CardContainer
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
