import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom';

function Chatbot() {


  const config = {
    floating: true,
  }

  return (
    
    <div>
        <h1>Chatbot is here</h1>
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
                    { value: 1, label: "Locations", trigger: "3"},
                    { value: 2, label: "Appointments", trigger: "6"},
                    { value: 3, label: "Dependents", trigger: "8"},
                    { value: 4, label:  "Services", trigger: "10"},
                ]
            },
            {
                id: '3',
                options: [
                    { value: 1, label: "Find locations near me", trigger: "4"},
                    { value: 2, label: "Change my registered location", trigger: "5"},
                ],
            },
            {
                id: '4',
                component: (
                    <Link to="/locations"> Click me to view locations! </Link>
                ),
                asMessage: true,
                end: true,
            },
            {
                id: '5',
                component: (
                    <Link to="/profile"> Click me to change your location! </Link>
                ),
                asMessage: true,
                end: true,
            },
            {
                id: '6',
                options: [
                    { value: 1, label: "Make an appointment", trigger: "7"},
                    { value: 2, label: "Manage my appointments", trigger: "5"},
                ]
            },
            {
                id: '7',
                component: (
                    <Link to="/appointments"> Click me to make an appointment! </Link>
                ),
                asMessage: true,
                end: true,
            },
            {
                id: '8',
                options: [
                    { value: 1, label: "Manage my dependents", trigger: "9"},
                ]
            },
            {
                id: '9',
                component: (
                    <Link to="/dependents"> Click me to view your dependents! </Link>
                ),
                asMessage: true,
                end: true,
            },
            {
                id: '10',
                message: "We provide services in child, pet, and elderly care. For more information check out our homepage!",
                trigger: '1',
            },
            ]}
            {...config}
        />

    </div>
    
  )
}

export default Chatbot