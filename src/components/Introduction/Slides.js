import { getByText } from '@testing-library/dom';
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import './styles.css'
const Slides = () => {

    const images = [
        {
            src:"https://img.icons8.com/doodle/480/000000/shoyo_hinata.png",
            // src2:"https://www.pngitem.com/pimgs/m/63-635434_large-pile-of-gold-coins-coins-clipart-hd.png",
            color:"#6a0dad",
            // icon1:<i class="fas fa-bolt"></i>,
            text:`Its time to earn with fun`

        },
        {
            src:"https://img.icons8.com/doodle/480/000000/super-mario.png",
            src2:"https://img.icons8.com/fluency/480/000000/coins.png",
            color:"#00ccff",
            text:"Play games, earn coin"
        },
        {
            src:"https://img.icons8.com/doodle/480/000000/iron-man.png",
            src2:"",
            color:"#ff6666",
            text:"Unlock the power of trading by setting goals"
        }
    ]
    const [idx,setIdx] = useState(0);

    const [icons,setIcons] = useState([
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

    ])

    const back = () =>{
        if(idx == 0) return;
            setIdx(idx=>{
                return idx-1;
            }
        )
    }
    const next = () =>{
        setIdx(idx=>{
            return idx+1;
        })
    }

    const getColor = () => {
        console.log(images[idx].color)
        return images[idx].color;
    }

    const getImage = () =>{
        return images[idx].src;
    }

    const getText= () =>{
        return images[idx].text;
    }

    const skip = () =>{
        setIdx(3);
    }

    if(idx == 3){
        return <Redirect to="/landing"/>
    }

    return (
        <>
          <div className="text-dark btn p-3 font-weight-bold " style={{float:"right",fontSize:"20px"}} onClick={()=>skip()}>
                <p>Skip <i class="fas fa-forward"></i></p>
            </div>
        <div style={{
            backgroundColor:`${getColor()}`,
            height:"100vh"
        }}
        className="text-light"
        >
            <div className="slide-outer-div" style={{paddingTop:"10vh"}}>
                {/* <p style={{fontSize:"5vw"}} className="text-center" id="heading-top" >Welcome to</p> */}
                <p style={{fontSize:"20px"}} className="text-center" id="heading-top" >Welcome to</p>
                <p style={{fontSize:"30px",marginTop:"-20px"}} className="text-center" id="heading" >Compounding</p>
                {/* <p style={{fontSize:"30px",paddingTop:"-50px"}} className="text-center" id="heading-top" >Compounding</p> */}
                {/* <p className="text-center mb-2" id="heading-slides"style={{fontSize:"4vw",margin:"-20px"}}>Compounding</p> */}
                <br></br>
                <span className="">
                    <img className="center image-slide" src={getImage()} />
                </span>
                <p className="text-center mt-3" >{icons[idx]}</p>
                <p className="text-center  text" style={{marginTop:"-7px"}}>{getText()} </p>
                <div className="container arrow">
                <div className="row">
                    <div 
                        className="col-6 text-center left" 
                    >
                        <p onClick={()=>back()} className={"btn  text-dark p-3"}><i class=" fas fa-chevron-left"></i></p>
                    </div>
                    <div 
                        className="col-6 text-center right" 
                    >  
                        <p onClick={()=>next()} className={"btn  text-dark p-3"}><i class=" fas fa-chevron-right"></i></p>
                    </div>
                </div>
                </div>
                
            </div>            
        </div>
        </>
    )
}

export default Slides;
