import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import './App.css'

function App() {
  const steps = [
    {
      id:'intial',
      message:'Hello, Welcome to our website',
      trigger:'welcome'
    },
    {
      id:'welcome',
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
        {value:"First_education",label:"First education",trigger:"First_education"},
        {value:"Women_welfare",label:"Women welfare",trigger:"Women_welfare"},
        {value:"Pongal_Bonus",label:"Pongal Bonus",trigger:"Pongal_Bonus"},
        {value:"Flood_fund",label:"Flood fund",trigger:"Flood_fund"},
        // {value:"Feild_fund",label:"Feild fund",trigger:"Feild_fund"},
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
        {value:"TNPSC_group_1",label:"TNPSC",trigger:"TNPSC_group_1"},
        {value:"TNPSC_group_2",label:"IIT",trigger:"TNPSC_group_2"},
        {value:"TNPSC_group_3",label:"NEET",trigger:"TNPSC_group_3"},
        {value:"TNPSC_group_4",label:"UPSC",trigger:"TNPSC_group_4"},
      ],
    },
    // {
    //   id:'Gov_ID_Proof',
    //   message:'Thank you',
    //   end:true,
    // },
    {
      id:'Aadhar_card',
      message:'You can apply or update your Aadhar card in this link',
      trigger:'alink'
    },
    {
      id:'alink',
      message:'https://uidai.gov.in/',
      trigger:'Great'
    },
    //   message:'Enter your age',
    //   trigger:'waiting2'
    // },
    // {
    //   id:'waiting2',
    //   user:true,
    //   trigger:'step2'
    // },
    // {
    //   id:'age',
    //   message:{previousvalue}>18 ? {trigger:'step2'}:{trigger:'Great'},
    // },
    // {
    //   id:'step2';
    //   message:{
    //     if(previousvalue >"18")
    //       {
    //         return(trigger:'step3')
    //       }
    //       else{
    //         return(trigger:'Great')
    //       }    
    //   }; 
    // trigger:'step3' 
    // }, 
    // },
    // {
    //   id:'step3',
    //   message:'You must be an Indian citizen',
    //   trigger:'Great'
    // },
    // {
    //   id:'No',
    //   message:'Your not eligible',
    //   trigger:'Great'
    // },
    {
      id:'Pan_card',
      message:'You can apply pan card throught this link',
      trigger:'plink'
    },
    {
      id:'plink',
      message:"https://www.pan.utiitsl.com/PAN/newA.html",
      // message:'You must be an Indian citizen',
      trigger:'Great'
    },
    {
      id:'Voter_ID',
      message:'You can apply new voter id throught this link',
      trigger:'vlink'
    },
    {
      id:'vlink',
      message:'https://voters.eci.gov.in/',
      // message:'You must be an Indian citizen with age above 18',
      trigger:'Great'
    },
    {
      id:'Driving_License',
      message:'You can driving license throught this link',
      trigger:'dlink'
    },
    {
      id:'dlink',
      message:'https://parivahan.gov.in/parivahan//en/content/driving-licence-0',
      // message:'You must be an Indian citizen with age above 18',
      trigger:'Great'
    },
    // {
    //   id:'Gov_Schemes',
    //   message:'Thank you',
    //   end:true
    // },
    {
      id:'First_education',
      message:'You can apply for this scheme through this link',
      trigger:'flink'
    },
    {
      id:'flink',
      message:'https://www.tnesevai.tn.gov.in/Default.aspx',
      // message:'You must be the 1st person in your family to get degree',
      trigger:'Great'
    },
    {
      id:'Women_welfare',
      message:'You can apply for this scheme through this link',
      trigger:'wlink'
    },
    {
      id:'wlink',
      message:'https://tnsocialwelfare.tn.gov.in/en',
      // message:'Annual Income of women\'s Family must be lessthan 2.5L ',
      trigger:'Great'
    },
    {
      id:'Pongal_Bonus',
      message:'It\'s currently closed ',
      // message:'You must be an employee of Central Gov r State Gov',
      trigger:'Great'
    },
    {
      id:'Flood_fund',
      message:'Enter Your area to check whether the scheme is applicable or not',
      trigger:'fwaiting'
    },
    {
      id:'fwaiting',
      user:true,
      trigger:'fcheck'
    },
    {
      id:'fcheck',
      message:'Your area {previousValue} is not updated in the list so please check sometimes later',
      // message:'Your house should be located in flood area',
      trigger:'Great'
    },
    // {
    //   id:'Feild_fund',
    //   message:'Feild must be harvested',
    //   trigger:'Great'
    // },
    {
      id:'TNPSC_group_1',
      message:'You can apply for this exam through this link',
      trigger:'tlink',
    },
    {
      id:'tlink',
      message:'https://www.tnpsc.gov.in/',
      // message:'You must be an Indian citizen with age above 21',
      trigger:'Great'
    },
    {
      id:'TNPSC_group_2',
      message:'You can apply for this exam through this link',
      trigger:'ilink'
    },
    {
      id:'ilink',
      message:'https://jeemain.nta.ac.in/',
      // message:'You must be an Indian citizen with age above 21',
      trigger:'Great'
    },
    {
      id:'TNPSC_group_3',
      message:'You can apply for this exam through this link',
      trigger:'nlink'
    },
    {
      id:'nlink',
      message:'https://neet.nta.nic.in/',
      // message:'You must be an Indian citizen with age above 21',
      trigger:'Great'
    },
    {
      id:'TNPSC_group_4',
      message:'You can apply for this exam throught this link',
      trigger:'ulink'
    },
    {
      id:'ulink',
      message:'https://upsc.gov.in/examinations/Civil%20Services%20%28Preliminary%29%20Examination%2C%202024',
      // message:'You must be an Indian citizen with age above 21',
      trigger:'Great'
    },
    // {
    //   id:'Gov_Exam_Application',
    //   message:'Thank you',
    //   trigger:'Great'
    // },
    // {
    //   id:'Great',
    //   message:'Thank you for using our chatbot',
    //   trigger:'waiting3'
    // },
    {
      id:'Great',
      message:'Do you want to continue using GovGuide',
      trigger:'waiting4'
    },
    {
      id:'waiting4',
      options:[
        {value:"Yes",label:"Yes",trigger:"final"},
        {value:"No",label:"No",trigger:"last"},
      ],
      // user:true,
      // trigger:'final'
    },
    {
      id:'final',
      message:'Once again welcome',
      trigger:'request'
    },
    {
      id:'last',
      message:'Thank you for using our chatbot',
      end:true
    }
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