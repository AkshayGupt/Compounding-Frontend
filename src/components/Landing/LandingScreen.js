import React, { useState, useEffect } from "react";
import Slides from "./Slides";
import "./styles.css";
import { Redirect } from "react-router-dom";
import firebase from "../../Config/FirebaseConfig";

const LandingScreen = () => {
  const [redirect, setRedirect] = useState(false);

  const loginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        localStorage.setItem("token", token);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(user);
        handleRegister();
        // User is signed in
      } else {
        // User is signed out
      }
    });
  }, []);

  const images = [
    {
      src: "https://img.icons8.com/doodle/240/000000/shoyo_hinata.png",
      color: "#6a0dad",
      text: `Its time to earn with fun`,
    },
    {
      src: "https://img.icons8.com/doodle/480/000000/super-mario.png",
      color: "#00ccff",
      text: "Play games, earn coin",
    },
    {
      src: "https://img.icons8.com/doodle/480/000000/iron-man.png",
      color: "#ff6666",
      text: "Unlock the power of trading by setting goals",
    },
  ];

  const icons = [
    [
      <i class="fas fa-bolt px-2" style={{ color: "yellow" }}></i>,
      <i class="fas fa-bolt px-2" style={{ color: "yellow" }}></i>,
    ],
    [
      <i
        class="fab fa-bitcoin px-1"
        style={{ color: "yellow", fontSize: "30px" }}
      ></i>,
      <i
        class="fab fa-bitcoin px-1"
        style={{ color: "orange", fontSize: "30px" }}
      ></i>,
      <i
        class="fab fa-bitcoin px-1"
        style={{ color: "green", fontSize: "30px" }}
      ></i>,
    ],
    [
      <i
        class="fas fa-chess-king px-1"
        style={{ color: "brown", fontSize: "30px" }}
      ></i>,
      <i
        class="fas fa-bullseye px-1"
        style={{ color: "yellow", fontSize: "30px" }}
      ></i>,
      <i
        class="fas fa-dice px-1"
        style={{ color: "lightpurple", fontSize: "30px" }}
      ></i>,
    ],
  ];

  const handleRegister = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/avatar" />;
  }

  return (
    <div
      className="pt-5 "
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        backgroundColor: "#6a0dad",
        border: "2px solid black",
      }}
    >
      {/* SLIDES */}
      <p style={{ fontSize: "20px" }} className="text-center" id="heading-top">
        Welcome to
      </p>
      <p
        style={{ fontSize: "30px", marginTop: "-20px" }}
        className="text-center"
        id="heading"
      >
        Compounding
      </p>
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
      <div
        className="mx-auto mt-5 "
        style={{ textAlign: "center", backgroundColor: "#6a0dad" }}
      >
        <div
          style={{
            maxWidth: "80%",
            margin: "auto",
            backgroundColor: "#6a0dad",
          }}
          onClick={() => {
            loginWithGoogle();
          }}
        >
          <a href="#" className="google btn">
            <i
              class="fa fa-google fa-fw"
              style={{ backgroundColor: "#dd4b39" }}
            ></i>{" "}
            Login with Google+
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
