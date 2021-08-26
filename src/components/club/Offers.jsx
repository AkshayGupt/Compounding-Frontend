import React from "react";
import DisplayScore from "../score/score";
import "./Offers.css";
import { Modal, closeButton } from 'react-bootstrap'
import { colors } from "@material-ui/core";
//import Spinner from '../slotmachine/SlotMachine'

export default function OffersComponent() {

  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);


  }
  const handleShow = () => {
    setShow(true);
    console.log('hello')
  }
  return (
    <div className="main-container">
      <div>
        <div className="rewards_header">
          <h5 style={{ fontSize: 25, fontWeight: "bold", fontFamily: "serif" }}>
            Rewards
          </h5>
        </div>
        <div className="reward_displayScore_container">
          <DisplayScore coin={97} diamond={26} />
        </div>
      </div>

      <div className="box-container">
        <img
          className="bigImages"
          src="/images/offers/amazon-pay-giftcard.jpg"
          alt="test"
        />
        <img className="smallImages" src="/images/offers/boat.jpg" alt="test" />

        <img
          className="smallImages"
          src="/images/offers/audible.jpg"
          onClick={handleShow}
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/myntra.jpg"
          alt="test"
        />
        <img className="smallImages" src="/images/offers/ajio.jpg" alt="test" />
      </div>

      {/* <h5 className="section-header pt-3 text-dark"> Only till mid night</h5> */}
      <div className="box-container mt-4">
        <img
          className="bigImages"
          src="/images/offers/saregama.jpeg"
          alt="test"
        />
        <img
          className="bigImages"
          src="/images/offers/watch_offer.jpeg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/skin-sci.jpeg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/coolwink.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/bewakoof.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/zomato.jpg"
          alt="test"
        />
      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <h6>Boat Headphones</h6>
            <h3 style={{ color: "#1d1d1f", fontWeight: "bold" }}>increase your sound quality</h3>
            <h5 style={{ display: 'inline', color: "#4f4e52", fontWeight: "bold" }}>&#8377; 1500 </h5>
            <h6 style={{ display: 'inline', textDecoration: 'line-through', color: "#88878a" }}>&#8377; 2500 </h6>
            <h6 style={{ display: 'inline', color: "#b3b0b8" }}> (inclusive of all taxes)</h6>

          </Modal.Title>
        </Modal.Header >

        <Modal.Body>
          <img
            className="bigImages"
            src="/images/headphones.jpg"
            alt="test"
          />
          <h6 style={{ color: "#88878a" }}>about product </h6>
          <ul>
            <li>Has a PVC cable which is durable and tangle free</li>
            <li>Compatibility and Connectivity: Compatible with Android/iOS and connectivity via 3.5mm AUX cable</li>
            <li>IPX Rating: NA, Rated Power : 3mW</li>
          </ul>

        </Modal.Body>


        <Modal.Footer>
          <button className='btn-info' onClick={handleClose}> BUY</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
