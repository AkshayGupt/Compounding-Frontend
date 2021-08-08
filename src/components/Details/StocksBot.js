import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';


const Stocks = () => {

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
        headerTitle="Welcome to stock quest"
        // speechSynthesis={{ enable: true, lang: 'en' }}
        handleEnd={handleEnd}
        width={"100vw"}
        height={"100vh"}
        cache={"true"}
        cacheName ={"StockCach"}
        steps={[
          {
            id: 'intro',
            message: 'Hello username',
            trigger: '1',
          },
          {
            id:'1',
            user: true,
            trigger: '2',
          },
          {
            id: '2',
            message: 'Want to buy stock ?',
            trigger:'3',
          },
          {
            id: '3',
            user: true,
            end:true,
          }
         
         
        ]}
        />
        // </ThemeProvider>
      );
    }
export default Stocks;