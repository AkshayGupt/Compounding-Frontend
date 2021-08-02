import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;
    console.log(JSON.stringify(steps));
    this.setState({ name, gender, age });
    localStorage.setItem("name",JSON.stringify(name))
    localStorage.setItem("gender",JSON.stringify(gender))
    localStorage.setItem("age",JSON.stringify(age))
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
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

  
  const handleEnd = ({ steps, values }) => {
    setTimeout(()=>{
      setRedirect(true);
    },2000)
  }

  if(redirect){
    return <Redirect to="/home" />
  }

    return (
      <ChatBot
      handleEnd={handleEnd}
      width={"100vw"}
      height={"100vh"}
        steps={[
          {
            id: '0',
            message: 'Welcome to Compounding!',
            trigger: 'intro',
          },
          {
            id: 'intro',
            message: 'Let me know something about you ',
            trigger: '1',
          },
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
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
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
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
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!', 
            trigger:'redirecting'
          },
          {
            id: 'redirecting',
            component:<Redirecting />,
            end:true,
          }
        ]}
      />
    );
  }

export default QuestionBot;