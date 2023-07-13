import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom';

function Chatbot() {


  const config = {
    floating: true,
  }

  return (
    
    <div>

        
        <ChatBot
            steps={[
            {
                id: '1',
                message: 'What can I help you with?',
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 1, label: "Help with appointments", trigger: "3"},
                    { value: 2, label: "See my dependents", trigger: "4"},
                ]
            },
            {
                id: '3',
                component: (
                    <div>Taking you there! <Link to="/appointments"></Link></div>
                ),
                message: 'Taking you to the appointment page',
                end: true,
            },
            {
                id: '4',
                component: (
                    <div>Taking you there! <Link to="/dependents"></Link></div>
                ),
                message: 'Taking you to your dependents!',
                end: true,
            },
            ]}
            {...config}
        />

    </div>
    
  )
}

export default Chatbot