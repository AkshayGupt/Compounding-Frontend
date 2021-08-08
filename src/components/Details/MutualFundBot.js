import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';


const MutualFund = () => {

    const [redirect, setRedirect] = useState(false);

  
  const handleEnd = ({ steps, values }) => {
    setTimeout(()=>{
      setRedirect(true);
    },2000)
  }

  if(redirect){
    return <Redirect to="/home" />
  }

    return (
      // <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="Welcome to mutual fund quest"
      // speechSynthesis={{ enable: true, lang: 'en' }}
      handleEnd={handleEnd}
      width={"100vw"}
      height={"100vh"}
        steps={[
          {
            id: 'intro',
            message: 'Hello username',
            trigger: '1',
          },
          {
            id:'1',
            message:'Do you want to play a quest',
            end:true
          }
         
        ]}
      />
      // </ThemeProvider>
    );
  }

export default MutualFund;