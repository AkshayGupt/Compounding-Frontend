import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';


const FixedDeposit = () => {

  const [redirect, setRedirect] = useState(false);

  
  const handleEnd = ({ steps, values }) => {
    setTimeout(()=>{
      setRedirect(true);
    },2000)
  }

  if(redirect){
    return <Redirect to="/dashboard" />
  }

    return (
      // <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="Welcome to quest"
      // speechSynthesis={{ enable: true, lang: 'en' }}
      handleEnd={handleEnd}
      width={"100vw"}
      height={"100vh"}
      cache={"true"}
      cacheName ={"fixeddepocache"}
        steps={[
          {
            id: 'intro',
            message: ' Hi, it’s sad that you have fallen upon bad times',
            trigger: '1',
          },
          {
            id: '1',
            message: 'I can help in turning your fortunes',
            trigger: '2',
          },
          {
            id: '2',
            message: 'You can ask me any wish',
            trigger: '3',
          },
          {
            id:'3',
            user: true,
            trigger: '4',
          },
          {
            id: '4',
            message: 'What a wish! I wish I could have that',
            trigger:'5',
          },
          {
            id: '5',
            message: 'I forgot to tell you that I will grant you one wish but you have to prove you are worthy',
            trigger:'6',
          },
          {
            id: '6',
            message: 'We will go through the next one year of your life in next five minutes',
            trigger:'7',
          },
          {
            id: '7',
            message: 'If you make the right choices, you may have your wish',
            trigger:'awayorstay',
          },
          {
            id: 'awayorstay',
            options: [
              { value: 'Continue', label: 'Continue', trigger: '8' },
              { value: 'Walk Away from Genie', label: 'Walk Away from Genie', trigger: '10' },
            ],
          },
          {
            id: '8',
            message: 'Wise decision',
            trigger:'9',
          },
          {
            id: '9',
            message: 'Awareness +5',
            trigger:'10',
          },
          {
            id: '10',
            message: 'You have the IPOs of the following company coming up',
            trigger:'11',
          },
          {
            id: '11',
            message: 'Alpha Inc has recorded $250 million in first quarter of the year',
            trigger:'12',
          },
          {
            id: '12',
            message: 'Beta Inc got Series C funding and now is valued at $7billion dollars',
            trigger:'13',
          },
          {
            id: '13',
            message: 'Zeta India, which was voted the most loved company in India',
            trigger:'14',
          },
          {
            id: '14',
            message: 'Which IPO to invest?',
            trigger:'company',
          },
          {
            id: 'company',
            options: [
              { value: 'Alpha', label: 'Alpha', trigger: '16' },
              { value: 'Beta', label: 'Beta', trigger: '16' },
              { value: 'Zeta', label: 'Zeta', trigger: '15' },
            ],
          },
          {
            id: '15',
            message: 'Assets +30',
            trigger:'16',
          },
          {
            id: '16',
            message: 'You can get a personal loan to pay up for your future contracts',
            trigger:'17',
          },
          {
            id: '17',
            message: 'that you are going to lose a lot of money',
            trigger:'18',
          },
          {
            id: '18',
            message: 'Or You have sell seven cars in your collection for about 6 crores to settle the payment',
            trigger:'reduction',
          },

          {
            id: 'reduction',
            options: [
              { value: 'Personal Loan', label: 'Personal Loan', trigger: '19' },
              { value: 'Sell Seven Cars', label: 'Sell Seven Cars', trigger: '20' }
            ],
          },
          {
            id: '19',
            message: 'Debt +20',
            trigger:'22',
          },
          {
            id: '20',
            message: 'Health -2',
            trigger:'21',
          },
          {
            id: '21',
            message: 'Contingencies -10',
            trigger:'22',
          },
          {
            id: '22',
            message: 'Given your financial situation, you need a portfolio with less risk',
            trigger:'23',
          },
          {
            id: '23',
            message: 'Should you increase your asset allocation in :',
            trigger:'stock',
          },
          {
            id: 'stock',
            options: [
              { value: 'large cap stocks', label: 'large cap stocks', trigger: '24' },
              { value: 'mid-cap', label: 'mid-cap', trigger: '27' },
              { value: 'small-cap stocks', label: 'small-cap stocks', trigger: '26' }
            ],
          },
          {
            id: '24',
            message: 'Awareness +30 Health +5',
            trigger:'27',
          },
          {
            id: '26',
            message: 'Awareness -20 Health -10',
            trigger:'27',
          },

          {
            id: '27',
            message: 'You have reached the end of the quest',
            trigger:'28',
          },
          {
            id: '28',
            message: 'AWelcome to “Compouding” ',
            trigger:'29',
          },
          {
            id: '29',
            message: 'Earn the freedom to live the way you want',
            trigger:'30',
          },
          {
            id: '29',
            message: '10000 coins added to your wallet” ',
            end:true,
          }
        ]}
      />
      // </ThemeProvider>
    );
  }

export default FixedDeposit;