import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import FooterTabs from "../club/footer-tabs";
import { ThemeProvider } from "styled-components";
import {createUser} from '../../utils/api';
import createPersistedState from 'use-persisted-state';

const useUserName = createPersistedState('username');



class Review extends Component {



  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      dob: "",
      salaried: false,
      city: "",
      salary: "",
      savings: "",
      pan: "",
    };
  }

 

  componentWillMount = () => {
    const { steps } = this.props;


    console.log(JSON.stringify(steps));
    const { name, gender, dob, city, salaried, salary, savings, pan } = steps;
    this.setState({ name, gender, dob, salaried, city, salary, savings, pan });
    if (salary) {
      this.setState({ ...this.state, salary });
      localStorage.setItem("salary", JSON.stringify(salary.value));
    }
    localStorage.setItem("steps", JSON.stringify(steps));
    localStorage.setItem("name", JSON.stringify(name.value));
    localStorage.setItem("gender", JSON.stringify(gender.value));
    localStorage.setItem("dob", JSON.stringify(dob.value));
    localStorage.setItem("salaried", JSON.stringify(salaried.value));
    localStorage.setItem("savings", JSON.stringify(savings.value));
    localStorage.setItem("pan", JSON.stringify(pan.value));
    localStorage.setItem("city", JSON.stringify(city.value));
  };

  render() {
    const {
      name,
      gender,
      dob,
      city,
      salaried,
      salary,
      savings,
      pan,
    } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <p>Thank you for choosing Compounding</p>
        {/* <p>name: {name.value}</p>
        <p>gender: {gender.value}</p>
        <p>dob: {dob.value}</p>
        <p>city: {city.value}</p>
        <p>Salaried: {salaried.value}</p>
        {salary && <p>Salary: {salary.value}</p>}
        <p>Savings: {savings.value}</p>
        <p>Pan: {pan.value}</p> */}
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const Redirecting = () => {
  return (
    <>
      <p> Redirecting to home page </p>
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </>
  );
};

const QuestionBot = () => {
  const [redirect, setRedirect] = useState(false);
  const [usernamegiven, setUserNameGiven] = useUserName('');


  const theme = {
    // background: '#f5f8fb',
    // fontFamily: 'Helvetica Neue',
    // headerBgColor: '#EF6C00',
    // headerFontColor: '#fff',
    // headerFontSize: '15px',
    // botBubbleColor: '#EF6C00',
    // botFontColor: '#fff',
    // userBubbleColor: '#fff',
    // userFontColor: '#4a4a4a',
  };

  const handleEnd = ({ steps, values }) => {

    

    const { name,  dob,  pan, email, phoneNumber } = steps;
    console.log("Trying to create account...");
    console.log(steps);
    createUser(name.value, pan.value, dob.value, phoneNumber.value, email.value)
    .then(data=>{
      if(!data.error){
        setUserNameGiven(name.value)
        localStorage.setItem("data", JSON.stringify(data));
        console.log(data);
        // setRedirect(true);
      }
      else{
        console.log("Error in creating account.");
      }
    })
    setTimeout(() => {
      setRedirect(true);
    }, 2000);
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={{ background: "#6e48aa" }}>
      <ChatBot
        style={{ borderRadius: "0px" }}
        headerTitle="Welcome to compounding"
        handleEnd={handleEnd}
        width={"100vw"}
        height={"100vh"}
        steps={[
          {
            id: "intro",
            message: "Hey there, What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user:true,
            trigger: "intro-username",
          },
          {
            id: "intro-username",
            message: 'Hey hello {previousValue}',
            trigger: "ask-phoneNumber",
          },
          {
            id: "ask-phoneNumber",
            message: "Can I get your number?",
            trigger: "phoneNumber",
          },
          {
            id: "phoneNumber",
            user: true,
            trigger: "good-deed",
          },
          {
            id: "good-deed",
            message: "I know we just met but you are amazing",
            trigger: "ask-email",
          },
          {
            id: "ask-email",
            message: "Where can I send you emails?",
            trigger: "email",
          },
          {
            id: "email",
            user: true,
            trigger: "ask-dob",
          },
          {
            id: "ask-dob",
            message: "Can you share your dob in (dd-mm-yyy) format?",
            trigger: "dob",
          },
          {
            id: "dob",
            user: true,
            trigger: "ask-pan",
          },
          {
            id: "ask-pan",
            message: "Can you share your pan?",
            trigger: "pan",
          },
          {
            id: "pan",
            user: true,
            trigger: "fast",
          },
          {
            id: "fast",
            message: " I would like to take things fast with you",
            trigger: "irritate",
          },
          {
            id: "irritate",
            message: " I know I am a little irritating right now",
            trigger: "lasttwoquest",
          },
          {
            id: "lasttwoquest",
            message: " But only last two questions",
            trigger: "ask-salary",
          },
          {
            id: "ask-salary",
            message: " What is your monthly salary?",
            trigger: "salary-input",
          },
          {
            id: "salary-input",
            user: true,
            trigger: "target",
          },
          {
            id: "target",
            message: " What is your target savings?",
            trigger: "target-input",
          },
          {
            id: "target-input",
            user: true,
            trigger: "thanks",
          },
          {
            id: "thanks",
            message: "Wonderful. Thanks for tolerating me.",
            trigger: "welcome",
          },
          {
            id: "welcome",
            message: "Welcome to Compounding,",
            trigger: "last-message",
          },
          {
            id: "last-message",
            message: "May you fly free and achieve financial freedom.",
            trigger: "redirecting",
          },
          {
            id: "redirecting",
            component: <Redirecting />,
            end: true,
          },
        ]}
      />
    </div>
  );
};

export default QuestionBot;
