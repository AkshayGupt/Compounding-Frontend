import React, { useState, useEffect } from "react";
import "./Avatar.css";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import { useHistory } from "react-router-dom";


const AvatarCreator = () => {
  console.log("hello");
  const history = useHistory();


  const avatars = [
    {
      avatarIcon: avatar1,
    },
    {
      avatarIcon: avatar2,
    },
    {
      avatarIcon: avatar3,
    },
    {
      avatarIcon: avatar1,
    },
    {
      avatarIcon: avatar2,
    },
    {
      avatarIcon: avatar3,
    },
    {
      avatarIcon: avatar1,
    },
    {
      avatarIcon: avatar2,
    },
    {
      avatarIcon: avatar3,
    },
  ];


  return (
    <div className="avatarCreator__main-screen" >
      <div className="select-quest-header">
        <h5
          className="select-quest_h5"
          style={{ fontSize: "25px", fontFamily: "fantasy" }}
         >
         Select Avatar
        </h5>
      </div>
      <div className="avatar-image-screen">
        <div className="avatar-image-row">
          <div className="card avatarCard_card">

            <img
              src="images/avatars/Avatar1_cooldude.png"
              style={{ width: "60px", height: "80px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h5
                className="card-title avatar__card-title avatar_h5"
                style={{ color: "#F5F8FB", borderRadius: "10px" }}
              >
                Description
            </h5>
              <p style={{ fontSize: "0.7em", margin: "0", padding: '0' }}>
                starting of game.
            </p>
            </div>

          </div>
          <div className="card avatarCard_card">
            <img
              src="images/avatars/Avatar2_noob_girl.png"
              style={{ width: "60px", height: "80px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h5
                className="card-title avatar__card-title avatar_h5"
                style={{ color: "#F5F8FB", borderRadius: "10px" }}
              >
                Description
            </h5>
              <p style={{ fontSize: "0.7em", margin: "0", padding: '0' }}>
                starting of game.
            </p>
            </div>



          </div>
        </div>

        <div className="avatar-image-row">
          <div className="card avatarCard_card">

            <img
              src="images/avatars/Avatar4_savvy_business_lday.png"
              style={{ width: "60px", height: "80px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h5
                className="card-title avatar__card-title avatar_h5"
                style={{ color: "#F5F8FB", borderRadius: "10px" }}
              >
                Description
</h5>
              <p style={{ fontSize: "0.7em", margin: "0", padding: '0' }}>
                starting of game.
</p>
            </div>

          </div>
          <div className="card avatarCard_card">
            <img
              src="images/avatars/Avatar3_Noob.png"
              style={{ width: "60px", height: "80px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h1
                className="card-title avatar__card-title avatar_h5"
                style={{ color: "#F5F8FB", borderRadius: "10px" }}
              >
                Description
             </h1>
              <p style={{ fontSize: "0.7em", margin: "0", padding: '0' }}>
                starting of game.
           </p>
            </div>

          </div>
        </div>



      </div>



      <button
        type="button"
        class="btn btn-primary sticky-sm-top"
        style={{ marginBottom: "10px" }}
        onClick={() => {
          history.push("/details");
        }}
      >
        select
      </button>
    </div>
  );
};

export default AvatarCreator;
