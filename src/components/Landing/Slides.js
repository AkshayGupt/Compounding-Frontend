import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

const Slides = ({
    img1,
    img2,
    img3,
    icon1,
    icon2,
    icon3
}) => {
    return (
        <div style={{width:"100%"}}>
        <Carousel autoPlay showThumbs={false} width="50vw" showIndicators={false} infiniteLoop showArrows={false} showStatus={false}>
            <div>
                <img src={img1.src} className="image-slide" width="100px"/>
                <p className="pt-3 text-white text">{img1.text}</p>
                <p className="pb-1 text-center" >{icon1}</p>
            </div>
            <div>
                <img src={img2.src} className="image-slide " />
                <p className="pt-3 text-white text">{img2.text}</p>
                <p className="pb-1 text-center" >{icon2}</p>
            </div>
            <div>
                <img src={img3.src} className="image-slide " />
                <p className="pt-3 text-white text">{img3.text}</p>
                <p className="pb-4  text-center " >{icon3}</p>
            </div>
        </Carousel>
        </div>
    )
}

export default Slides;
