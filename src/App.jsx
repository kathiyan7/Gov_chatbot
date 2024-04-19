import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import './App.css'

function App() {
  const steps = [
    {
      id:'intial',
      message:'Hello, Welcome to our website',
      trigger:'Great'
    },
    {
      id:'Great',
      message:'Please enter your name',
      trigger:'waiting1'
    },
    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi {previousValue}, please select your request',
      trigger:'request'
    },
    {
      id:'request',
      options:[
        {value:"Gov_ID_Proof",label:"Gov ID Proof",trigger: "Gov_ID_Proof"},
        {value:"Gov_Schemes",label:"Gov Schemes",trigger: "Gov_Schemes"},
        {value:"Gov_Exam_Application",label:"Gov Exam Application",trigger: "Gov_Exam_Application"},
      ],
    },
    {
      id:'Gov_ID_Proof',
      message:'Select which ID Proof you want to apply for',
      trigger:'proof'
    },
    {
      id:'proof',
      options:[
        {value:"Aadhar_card",label:"Aadhar card",trigger: "Aadhar_card"},
        {value:"Pan_card",label:"Pan card",trigger: "Pan_card"},
        {value:"Voter_ID",label:"Voter ID",trigger: "Voter_ID"},
        {value:"Driving_License",label:"Driving License",trigger: "Driving_License"},
      ],
    },
    {
      id:'Gov_Schemes',
      message:'Select which Scheme you want to apply for',
      trigger:'Schemes'
    },
    {
      id:'Schemes',
      options:[
        {value:"First_education",label:"First_education",trigger:"First_education"},
        {value:"Women_welfare",label:"Women_welfare",trigger:"Women_welfare"},
        {value:"Pongal_Bonus",label:"Pongal_Bonus",trigger:"Pongal_Bonus"},
        {value:"Flood_fund",label:"Flood_fund",trigger:"Flood_fund"},
        {value:"Feild_fund",label:"Feild_fund",trigger:"Feild_fund"},
      ],
    },
    {
      id:'Gov_Exam_Application',
      message:'Select which Exam you want to apply for',
      trigger:'Application'
    },
    {
      id:'Application',
      options:[
        {value:"TNPSC_group_1",label:"TNPSC_group_1",trigger:"TNPSC_group_1"},
        {value:"TNPSC_group_2",label:"TNPSC_group_2",trigger:"TNPSC_group_2"},
        {value:"TNPSC_group_3",label:"TNPSC_group_3",trigger:"TNPSC_group_3"},
        {value:"TNPSC_group_4",label:"TNPSC_group_4",trigger:"TNPSC_group_4"},
      ],
    },
    // {
    //   id:'Gov_ID_Proof',
    //   message:'Thank you',
    //   end:true,
    // },
    {
      id:'Aadhar_card',
      message:'Enter your age',
      trigger:'waiting2'
    },
    {
      id:'waiting2',
      user:true,
      trigger:'step2'
    },
    // {
    //   id:'age',
    //   if(previousvalue >"18")
    //   {
    //     return(trigger:'step2')
    //   }
    //   else{
    //     return(trigger:'No')
    //   }
    // },
    {
      id:'step2',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'No',
      message:'Your not eligible',
      trigger:'Great'
    },
    {
      id:'Pan_card',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'Voter_ID',
      message:'You must be an Indian citizen with age above 18',
      trigger:'Great'
    },
    {
      id:'Driving_License',
      message:'You must be an Indian citizen with age above 18',
      trigger:'Great'
    },
    // {
    //   id:'Gov_Schemes',
    //   message:'Thank you',
    //   end:true
    // },
    {
      id:'First_education',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'Women_welfare',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'Pongal_Bonus',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'Flood_fund',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'Feild_fund',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'TNPSC_group_1',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'TNPSC_group_2',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'TNPSC_group_3',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'TNPSC_group_4',
      message:'You must be an Indian citizen',
      trigger:'Great'
    },
    // {
    //   id:'Gov_Exam_Application',
    //   message:'Thank you',
    //   trigger:'Great'
    // },
  ]

  return (
    <>
    <div className="gg">
    <ChatBot steps={steps} 
    style= {{height: '100%', width: '1280px'}}/> 
    </div>
    </>
  );
}

export default App;