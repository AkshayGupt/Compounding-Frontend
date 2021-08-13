import React, { useState, useEffect, prevState } from "react";
import "./Avatar.css";
import createPersistedState from 'use-persisted-state';
import { useHistory } from "react-router-dom";


const useSelectedAvatarState = createPersistedState('selectedAvatar');




const AvatarCreator = () => {

  console.log("hello");

  const history = useHistory();


  const [Avatar1_cooldude, setAvatar1_cooldude] = useState('#f5f8fb')

  const [Avatar2_noob_girl, setAvatar2_noob_girl] = useState('#f5f8fb')

  const [Avatar4_savvy_business_lday, setAvatar4_savvy_business_lday] = useState('#f5f8fb')

  const [Avatar3_Noob, setAvatar3_Noob] = useState('#f5f8fb')

  const [avatar, setAvatar] = useSelectedAvatarState('');

  const selectAvatar = (name) => {

    if (name === 'Avatar1_cooldude') {
      setAvatar1_cooldude('#6e48aa')
      setAvatar2_noob_girl('#f5f8fb')
      setAvatar3_Noob('#f5f8fb')
      setAvatar4_savvy_business_lday('#f5f8fb')
      setAvatar(name)
    }

    else if (name === 'Avatar2_noob_girl') {
      setAvatar2_noob_girl('#6e48aa')
      setAvatar1_cooldude('#f5f8fb')
      setAvatar3_Noob('#f5f8fb')
      setAvatar4_savvy_business_lday('#f5f8fb')
      setAvatar(name)
    }

    else if (name === 'Avatar3_Noob') {
      setAvatar3_Noob('#6e48aa')
      setAvatar1_cooldude('#f5f8fb')
      setAvatar2_noob_girl('#f5f8fb')
      setAvatar4_savvy_business_lday('#f5f8fb')
      setAvatar(name)
    }

    else {
      setAvatar4_savvy_business_lday('#6e48aa')
      setAvatar2_noob_girl('#f5f8fb')
      setAvatar3_Noob('#f5f8fb')
      setAvatar1_cooldude('#f5f8fb')
      setAvatar(name)
    }

    console.log(avatar)
  }

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
          <div className="card avatarCard_card" style={{ backgroundColor: Avatar1_cooldude }} onClick={() => {
            selectAvatar("Avatar1_cooldude")
          }}>

            <img
              src="images/avatars/Avatar1_cooldude.png"
              style={{ width: "100%", height: "80px",paddingLeft:"2rem",paddingRight:"2rem" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h5
                className="card-title avatar__card-title avatar_h5"
               
              >
                Mohit
            </h5>
              <p style={{ fontSize: "0.7em", lineHeight: "1.5em" }}>
                 CEO of his second startup, became financially independent at 26.
            </p>
            </div>

          </div>
          <div className="card avatarCard_card" style={{ backgroundColor: Avatar2_noob_girl }} onClick={() => {
            selectAvatar("Avatar2_noob_girl")
          }}>
            <img
              src="images/avatars/Avatar2_noob_girl.png"
              style={{  width: "100%", height: "80px",paddingLeft:"2rem",paddingRight:"2rem"  }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h5
                className="card-title avatar__card-title avatar_h5"
              >
                Keerthi
            </h5>
              <p style={{ fontSize: "0.7em", lineHeight: "1.5em" }}>
                college student, fights regularly with parents for pocket money.
            </p>
            </div>



          </div>
        </div>

        <div className="avatar-image-row">
          <div className="card avatarCard_card" style={{ backgroundColor: Avatar4_savvy_business_lday }} onClick={() => {
            selectAvatar("Avatar4_savvy_business_lday")
          }}>

            <img
              src="images/avatars/Avatar4_savvy_business_lday.png"
              style={{ width: "100%", height: "80px",paddingLeft:"2rem",paddingRight:"2rem" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h5
                className="card-title avatar__card-title avatar_h5"
              >
                Samantha
</h5>
              <p style={{ fontSize: "0.7em", lineHeight: "1.5em" }}>
              financially independent, spends all her time in libraries.
</p>
            </div>

          </div>
          <div className="card avatarCard_card" style={{ backgroundColor: Avatar3_Noob }} onClick={() => {
            selectAvatar("Avatar3_Noob")
          }}>
            <img
              src="images/avatars/Avatar3_Noob.png"
              style={{  width: "100%", height: "80px",paddingLeft:"2rem",paddingRight:"2rem" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body avatarimg_card-body">
              <h1
                className="card-title avatar__card-title avatar_h5"
              >
                Philip
             </h1>
              <p style={{ fontSize: "0.7em", lineHeight: "1.5em" }}>
              two years work exp, doesn’t know a thing about mutual funds.
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
