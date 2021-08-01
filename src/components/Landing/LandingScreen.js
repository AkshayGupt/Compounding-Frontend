import React,{useState} from 'react';
import Slides from "./Slides";
import './styles.css'

const LandingScreen = () => {

    const images = [
        {
            src:"https://img.icons8.com/doodle/240/000000/shoyo_hinata.png",
            color:"#6a0dad",
            text:`Its time to earn with fun`

        },
        {
            src:"https://img.icons8.com/doodle/480/000000/super-mario.png",
            color:"#00ccff",
            text:"Play games, earn coin"
        },
        {
            src:"https://img.icons8.com/doodle/480/000000/iron-man.png",
            color:"#ff6666",
            text:"Unlock the power of trading by setting goals"
        }
    ]
  
    const icons = [
        [
            <i class="fas fa-bolt px-2" style={{color:"yellow"}}></i>,
            <i class="fas fa-bolt px-2" style={{color:"yellow"}}></i>,  
        ],
        [
            <i class="fab fa-bitcoin px-1" style={{color:"yellow",fontSize:"30px"}}></i>,
            <i class="fab fa-bitcoin px-1" style={{color:"orange",fontSize:"30px"}}></i>,
            <i class="fab fa-bitcoin px-1" style={{color:"green",fontSize:"30px"}}></i>,
        ],
        [
            <i class="fas fa-chess-king px-1" style={{color:"brown",fontSize:"30px"}}></i>,
            <i class="fas fa-bullseye px-1"  style={{color:"yellow",fontSize:"30px"}}></i>,
            <i class="fas fa-dice px-1"  style={{color:"lightpurple",fontSize:"30px"}}></i>
        ]
    ]   

    return (
        <div className="pt-5 " style={{minHeight:"100vh",minWidth:"100%",backgroundColor:"#6a0dad",border:"2px solid black"}} >

            {/* SLIDES */}
            <p style={{fontSize:"20px"}} className="text-center" id="heading-top" >Welcome to</p>
            <p style={{fontSize:"30px",marginTop:"-20px"}} className="text-center" id="heading" >Compounding</p>
            <div style={{width:"fit-content",margin:"auto"}}>
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
            <div className="mx-auto mt-5 " >
                <div style={{width:"400px",maxWidth:"80%",margin:"auto"}}>
                    <p className="p-2 btn btn-outline-success btn-block btn-outline">Login</p>
                </div>
                <div style={{width:"400px",maxWidth:"80%",margin:"auto"}}>
                    <p className="p-2 btn btn-outline-primary btn-block btn-outline">Register</p>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen;
