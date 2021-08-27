import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./styles.css";
// import gold from "./gold.svg";
import ScoreComponent from "../../score/score";

const Youtube = () => {
  const [coins, setCoins] = useState(0);

  const youtubeChannelList = [
    "https://www.youtube.com/watch?v=Xn7KWR9EOGQ",
    "https://www.youtube.com/watch?v=LRgWGsrzMAU",
    "https://www.youtube.com/watch?v=iJFY2p497O4",
    "https://www.youtube.com/watch?v=1DRq8N7SpYc",
  ];

  const updateCoins = () => {
    setCoins(coins + 1);
  };

  return (
    <>
      <ScoreComponent coin={coins} diamond={coins} />

      <div className="tutorial ">
        {youtubeChannelList.map((link, i) => {
          // eslint-disable-next-line
          var frame = (
            <div key={i} className="youtube mx-auto text-center">
              <ReactPlayer
                url={link}
                onEnded={updateCoins}
                controls={true}
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 1,
                      iv_load_policy: 3,
                    },
                  },
                }}
                height={"50vh"}
                width={"80vw"}
              />

              {/* <button className="video-completed-button" style={{width:"80vw"}} > Did you completed the video ?</button> */}
            </div>
          );
          return frame;
        })}
      </div>
    </>
  );
};

export default Youtube;
