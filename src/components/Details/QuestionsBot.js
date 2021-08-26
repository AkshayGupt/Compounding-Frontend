import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';
import FooterTabs from "../club/footer-tabs";
import { ThemeProvider } from 'styled-components';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
      salaried: false,
      city: '',
      salary:''
    };
  }

  componentWillMount = ()=> {
    const { steps } = this.props;
   
    console.log(JSON.stringify(steps));
    const { name, gender, age, city, salaried, salary } = steps;
    this.setState({name, gender, age, salaried, city});
    if(salary){
      this.setState({...this.state, salary });
      localStorage.setItem("salary", JSON.stringify(salary.value));
    }
    localStorage.setItem("steps", JSON.stringify(steps))
    localStorage.setItem("name", JSON.stringify(name.value))
    localStorage.setItem("gender", JSON.stringify(gender.value))
    localStorage.setItem("age", JSON.stringify(age.value))
    localStorage.setItem("salaried", JSON.stringify(salaried.value))
    
    localStorage.setItem("city", JSON.stringify(city.value))
  }

  render() {
    const { name, gender, age, city, salaried, salary } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <p>name: {name.value}</p>
        <p>gender: {gender.value}</p>
        <p>age: {age.value}</p>
        <p>city: {city.value}</p>
        <p>Salaried: {salaried.value}</p>
        {salary && <p>Salary: {salary.value}</p>}
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

const Redirecting = () =>{
  return(
    <>
                <p> Redirecting to home page  </p>
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </>
  )
}

const QuestionBot = () => {

  const [redirect, setRedirect] = useState(false);

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


  const handleEnd = ({steps, values}) => {
                setTimeout(() => {
                  setRedirect(true);
                }, 2000)
              }

  if(redirect){
    return <Redirect to="/home" />
  }

    return (
      <div style={{background:"#6e48aa"}}>
                <ChatBot
                style={{borderRadius:"0px"}}
                  headerTitle="Welcome to compounding"
                  handleEnd={handleEnd}
                  width={"100vw"}
                  height={"100vh"}
                  steps={[
                    {
                      id: 'intro',
                      message: 'Let me know something about you ',
                      trigger: 'ask-name',
                    },
                    {
                      id: 'ask-name',
                      message: 'What is your name?',
                      trigger: 'name',
                    },
                    {
                      id: 'name',
                      user: true,
                      trigger: 'ask-gender',
                    },
                    {
                      id: 'ask-gender',
                      message: 'Hi {previousValue}! What is your gender?',
                      trigger: 'gender',
                    },
                    {
                      id: 'gender',
                      options: [
                        { value: 'male', label: 'Male', trigger: 'ask-city' },
                        { value: 'female', label: 'Female', trigger: 'ask-city' },
                      ],
                    },
                    {
                      id: 'ask-city',
                      message: 'What is your city?',
                      trigger: 'city'
                    },
                    {
                      id: 'city',
                      user: true,
                      trigger: 'ask-age',
                    },
                    {
                      id: 'ask-age',
                      message: 'How old are you?',
                      trigger: 'age',
                    },
                    {
                      id: 'age',
                      user: true,
                      trigger: 'ask-salaried',
                      validator: (value) => {
                        if (isNaN(value)) {
                          return 'value must be a number';
                        } else if (value < 0) {
                          return 'value must be positive';
                        } else if (value > 120) {
                          return `${value}? Come on!`;
                        }

                        return true;
                      },
                    },
                    {
                      id: 'ask-salaried',
                      message: 'Are you a salaried employee ?',
                      trigger: 'salaried',
                    },
                    {
                      id: 'salaried',
                      options: [
                        { value: 'true', label: 'Yes', trigger: 'ask-salary' },
                        { value: 'false', label: 'No', trigger: 'review' },
                      ],
                    },
                    {
                      id:'ask-salary',
                      message: 'What is your monthly salary?',
                      trigger: 'salary'
                    },{
                      id:'salary',
                      user:true,
                      trigger:'review'
                    },
                    {
                      id: 'review',
                      component: <Review/>,
                      asMessage: true,
                      trigger:'redirect',
                    },
                    {
                      id: 'redirect',
                      message: 'Thank for spending time with me!',
                      trigger: 'redirecting',
                    },
                    {
                      id: 'update',
                      message: 'Would you like to update some field?',
                      trigger: 'update-question',
                    },
                    {
                      id: 'update-question',
                      options: [
                        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                        { value: 'no', label: 'No', trigger: 'end-message' },
                      ],
                    },
                    {
                      id: 'update-yes',
                      message: 'What field would you like to update?',
                      trigger: 'update-fields',
                    },
                    {
                      id: 'update-fields',
                      options: [
                        { value: 'name', label: 'Name', trigger: 'update-name' },
                        { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                        { value: 'age', label: 'Age', trigger: 'update-age' },
                      ],
                    },
                    {
                      id: 'update-name',
                      update: 'name',
                      trigger: 'review',
                    },
                    {
                      id: 'update-gender',
                      update: 'gender',
                      trigger: 'review',
                    },
                    {
                      id: 'update-age',
                      update: 'age',
                      trigger: 'review',
                    },
                    {
                      id: 'end-message',
                      message: 'Thanks! Your data was submitted successfully!',
                      trigger: 'redirecting'
                    },
                    {
                      id: 'redirecting',
                      component: <Redirecting />,
                      end: true,
                    }
                  ]}
                />

                </div>
    );
  }

export default QuestionBot;