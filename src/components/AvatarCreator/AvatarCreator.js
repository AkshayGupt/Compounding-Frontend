import React, { useState, useEffect } from 'react';
import './styles.css'
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';


const AvatarCreator = () => {





    console.log("hello")

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
        }

    ]





    return (


        <div className="main-screen">
            <h4 style={{backgroundColor:"#8a2be2"}} >Select Avatar</h4>

            <div className="content">
                <div className="column" >
                    {
                        avatars.map((avatar) => {

                            return <div className="column" >
                                <img src={avatar.avatarIcon} alt="" />
                            </div>

                        })
                    }
                </div>
            </div>
            <button type="button" class="btn btn-primary sticky-sm-top" style={{ marginTop: "10px" }}>select</button>


        </div>

    );


}


export default AvatarCreator;