import React from "react";
import DisplayScore from "../score/score";
import "./Offers.css";
import { Modal, closeButton } from 'react-bootstrap'
//import useWindowSize from 'react-use/lib/useWindowSize'
import { colors } from "@material-ui/core";
import Confetti from 'react-confetti'
//import Spinner from '../slotmachine/SlotMachine'
import {deductFunds} from '../../utils/api'

export default function OffersComponent() {

 

  const [show, setShow] = React.useState(false);

  const [showmyntra, setShowmyntra] = React.useState(false);

  

  const handleClose = () => {
    
    setShow(false);



  }
  const handleShow = () => {
    setShow(true);
  }


  const myntraHandleClose = () => {
    
    setShowmyntra(false);


  }
  const myntraHandleShow = () => {
    setShowmyntra(true);
  }



  const buyBoatHeadPhone = () => {

    deductFunds("73ff54fb-bb78-42c0-a735-7e46a993139a",'1')
    .then(() => {
      setShow(false);
    })
    .catch((err) => console.log(err));
    
  }


  const buyMyntraNikeShoes = () => {  
    deductFunds("73ff54fb-bb78-42c0-a735-7e46a993139a",'1')
    .then(() => {
      setShowmyntra(false);
    })
    .catch((err) => console.log(err));
  }


  return (
    
    <div className="main-container">
      <Confetti  style={{width:'100%'}} tweenDuration={'1000'}
    >
      </Confetti>
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
        <img className="smallImages" src="/images/offers/boat.jpg" alt="test"  onClick={handleShow} />

        <img
          className="smallImages"
          src="/images/offers/myntra.jpg"
          alt="test"
          onClick={myntraHandleShow}
        />
        <img
          className="smallImages"
          src="/images/offers/audible.jpg"
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
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true" style={{fontSize: '160%'}}>&times;</span>
            </button>
            <h6>Boat Headphones</h6>

            <h3 style={{ color: "#1d1d1f", fontWeight: "bold" }}>increase your sound quality</h3>
            <h5 style={{ display: 'inline', color: "#4f4e52", fontWeight: "bold" }}>&#8377; 200 </h5>
            <h6 style={{ display: 'inline', textDecoration: 'line-through', color: "#88878a" }}>&#8377; 1000 </h6>
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
            <li>Active Noise Cancellation: NA</li>
            <li>Enjoy powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, balanced sound for a complete listening experience</li>
            <li>1 year warranty from the date of purchase </li>

          </ul>

          

        </Modal.Body>


        <Modal.Footer style={{justifyContent:'center',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',backgroundColor:'#f5f3f7'}} >
        <div className="form-check" style={{width:'100%'}}>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{color:'#0d9174'}}/>
            <label className="form-check-label" for="flexCheckDefault" style={{color:'#0d9174'}}>
              use 800 freedom coins to get this at &#8377; 200
             </label>
          </div>
          <button className='btn' onClick={buyBoatHeadPhone} style={{borderRadius:'25px',width:"250px",height:'50px',backgroundColor:'#6e48aa',color:'#f5f8fb'}}> Pay  &#8377; 200</button>
        </Modal.Footer>
      
      
      
      </Modal>


      <Modal show={showmyntra}>
        <Modal.Header>
          <Modal.Title>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={myntraHandleClose}>
              <span aria-hidden="true" style={{fontSize: '160%'}}>&times;</span>
            </button>
            <h6>Nike Shoes</h6>

            <h3 style={{ color: "#1d1d1f", fontWeight: "bold" }}>run everywhere, fun everywhere</h3>
            <h5 style={{ display: 'inline', color: "#4f4e52", fontWeight: "bold" }}>&#8377; 200 </h5>
            <h6 style={{ display: 'inline', textDecoration: 'line-through', color: "#88878a" }}>&#8377; 1000 </h6>
            <h6 style={{ display: 'inline', color: "#b3b0b8" }}> (inclusive of all taxes)</h6>
          </Modal.Title>
        </Modal.Header >

        <Modal.Body>
          <img
            className="bigImages"
            src="/images/shoes.jpeg"
            alt="test"
          />
          <h6 style={{ color: "#88878a" }}>about product </h6>
          <ul>
            <li>A pair of round-toe off-white sneakers, has regular styling, lace-up detail</li>
            <li>Mesh upper</li>
            <li>Cushioned footbed</li>
            <li>Textured and patterned outsole</li>
            <li>Warranty: 3 months</li>
            <li>Warranty provided by brand/manufacturer</li>

          </ul>

          

        </Modal.Body>


        <Modal.Footer style={{justifyContent:'center',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',backgroundColor:'#f5f3f7'}} >
        <div className="form-check" style={{width:'100%'}}>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{color:'#0d9174'}}/>
            <label className="form-check-label" for="flexCheckDefault" style={{color:'#0d9174'}}>
              use 800 freedom coins to get this at &#8377; 200
             </label>
          </div>
          <button className='btn' onClick={buyMyntraNikeShoes} style={{borderRadius:'25px',width:"250px",height:'50px',backgroundColor:'#6e48aa',color:'#f5f8fb'}}> Pay  &#8377; 200</button>
        </Modal.Footer>
      
      
      
      </Modal>
    </div>
  );
}
