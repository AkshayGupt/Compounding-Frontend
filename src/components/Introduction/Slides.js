import { getByText } from '@testing-library/dom';
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import './styles.css'
const Slides = () => {

    const images = [
        {
            src:"https://img.icons8.com/doodle/480/000000/shoyo_hinata.png",
            color:"#6a0dad",
            text:"Its time to earn with fun"
        },
        {
            src:"https://img.icons8.com/doodle/480/000000/super-mario.png",
            color:"#00ccff",
            text:"Spend smart, earn smart."
        },
        {
            src:"https://img.icons8.com/doodle/480/000000/iron-man.png",
            color:"#ff6666",
            text:"Unlock the power of trading"
        }
    ]
    const [idx,setIdx] = useState(0);



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
            <div className="slide-outer-div" style={{paddingTop:"14vh"}}>
                <p style={{fontSize:"0.3 rem"}} className="text-center">Welcome to</p>
                <p className="text-center mb-2" style={{fontSize:"200%",margin:"-20px"}}>Compounding</p>
                <br></br>
                <span className="">
                    <img className="center image-slide" src={getImage()} />
                </span>
                <p className="text-center mt-4">{getText()}</p>
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
