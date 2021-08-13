import React, { useState, useEffect } from 'react';
import Slides from "./Slides";
import './styles.css'
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";
import firebase from '../../Config/FirebaseConfig'

const LandingScreen = () => {

    const [redirect, setRedirect] = useState(false);

      
      useEffect(() => {
        if(localStorage.getItem("data")!= null && JSON.parse(localStorage.getItem("data")).user != null ){
          setSuccess(true);
        }
      }, [])
    
      const [success,setSuccess] =useState(false);
    
      const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        const data = {
          user: result,
          token: token,
        };
        try {
          localStorage.setItem("data", JSON.stringify(data));
          setSuccess(true);
        } catch (err) {
          console.log(err);
        }
      };
    
      const googleFailure = () => {
      alert("Google Failure...");
      };

    const images = [
        {
            src: "/images/avatars/Avatar1_cooldude.png",
            color: "#6a0dad",
            text: `Its time to earn with fun`

        },
        {
            src: "/images/avatars/Avatar2_noob_girl.png",
            color: "#00ccff",
            text: "Play games, earn coin"
        },
        {
            src: "/images/avatars/Avatar3_Noob.png",
            color: "#ff6666",
            text: "Unlock the power of trading by setting goals"
        }
    ]

    const icons = [
        [
            <i class="fas fa-bolt px-2" style={{ color: "yellow" }}></i>,
            <i class="fas fa-bolt px-2" style={{ color: "yellow" }}></i>,
        ],
        [
            <i class="fab fa-bitcoin px-1" style={{ color: "yellow", fontSize: "30px" }}></i>,
            <i class="fab fa-bitcoin px-1" style={{ color: "orange", fontSize: "30px" }}></i>,
            <i class="fab fa-bitcoin px-1" style={{ color: "green", fontSize: "30px" }}></i>,
        ],
        [
            <i class="fas fa-chess-king px-1" style={{ color: "brown", fontSize: "30px" }}></i>,
            <i class="fas fa-bullseye px-1" style={{ color: "yellow", fontSize: "30px" }}></i>,
            <i class="fas fa-dice px-1" style={{ color: "lightpurple", fontSize: "30px" }}></i>
        ]
    ]

    const handleRegister = () => {
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/avatar" />
    }

    if(success){
        return <Redirect to="/avatar" />
    }

    return (
        <div className="pt-5 " style={{ minHeight: "100vh", minWidth: "100%", backgroundColor: "#6a0dad",overflow:"hidden" }} >

            {/* SLIDES */}
            <p style={{ fontSize: "30px", marginTop: "8vh" }} className="text-center" id="heading" >Compounding</p>
            <div style={{ width: "fit-content", margin: "auto" }}>
                <Slides
                    img1={images[0]}
                    img2={images[1]}
                    img3={images[2]}
                    icon1={icons[0]}
                    icon2={icons[1]}
                    icon3={icons[2]}

                />
            </div>

            {/* LOGIN & REGISTER buttons */}
            <div className="text-center">
     
            <GoogleLogin
            clientId="457983326950-qa8tau8a2dsjdga1uh1hrv6fofqpfrtg.apps.googleusercontent.com"
            uxMode="redirect"
            redirectUri="https://compounding.netlify.app/avatar"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="btn btn-primary btn my-2 mx-auto text-center"
              >
                <i className="fab fa-google" aria-hidden="true"></i>
                {"  "}Login with Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
                     
        </div>
        </div>
  );
};

export default LandingScreen;
