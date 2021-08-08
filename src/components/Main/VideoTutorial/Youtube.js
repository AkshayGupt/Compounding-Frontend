import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './styles.css'
import gold from './gold.svg';


const Youtube = () => {


    const [coins, setCoins] = useState(0);




    const youtubeChannelList = [
        "https://www.youtube.com/watch?v=GHOZ6HggUvA",
        "https://www.youtube.com/watch?v=GHOZ6HggUvA",
        "https://www.youtube.com/watch?v=GHOZ6HggUvA",
        "https://www.youtube.com/watch?v=GHOZ6HggUvA",

    ]



    const updateCoins = () => {
        setCoins(coins + 1)
    }

    return (

        <>
            <div className="coinsqtybox">
            <img src={gold} className="coinsimg"></img>
             <h6 className="coinsqty">{coins}</h6>    
            </div>


            <div className="tutorial">

                {
                    youtubeChannelList.map((link, i) => {
                        // eslint-disable-next-line
                        var frame = <div key={i} className="youtube">
                            <ReactPlayer url={link} onEnded={updateCoins} config={{
                                youtube: {
                                    playerVars: {
                                        showinfo: 1,
                                        iv_load_policy: 3
                                    }
                                }

                            }} height={650} width={800} />

                            <button className="video-completed-button" > Did you completed the video ?</button>

                        </div>
                        return frame;
                    })
                }

            </div>

        </>

    )
}


export default Youtube;      