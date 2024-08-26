import React, { useState } from 'react';
import { VolunteerActivism,Report, ContactPage } from '@mui/icons-material';
import Navbar from '../Components/Bar/Navbar';
import Reports from '../Components/Pages/Report';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Contact from '../Components/Pages/Contact';
import History from '../Components/Pages/History';

const BloodCollection = () => {

const [activeContent, setActiveContent] = useState('contact');

  const renderContent = () => {
    switch (activeContent) {
      case 'contact':
        return <Contact/>;
      case 'donation':
        return <History/>;
      case 'report':
        return <Reports/>;
      default:
        return null;
    }
  };
  return (
    <div className='w-full space-y-3 h-full overflow-y-hidden'>
        <Navbar />
        <div className='flex items-center text-gray-500 p-4 text-lg font-bold justify-around'>
            <span
              className={`space-x-4 rounded-xl flex justify-between items-center p-3 cursor-pointer 
                ${activeContent === 'contact' ? 'bg-[#54C2B5] text-white' : 'bg-gray-200 hover:bg-[#54C2B5] hover:text-white'}`}
              onClick={() => setActiveContent('contact')}
            >
              <ContactPage style={{color:'white'}} />
              <p>CONTACT</p>
            </span>

            <span
              className={`space-x-4 rounded-xl flex justify-between items-center p-3 cursor-pointer 
                ${activeContent === 'donation' ? 'bg-[#54C2B5] text-white' : 'bg-gray-200 hover:bg-[#54C2B5] hover:text-white'}`}
              onClick={() => setActiveContent('donation')}
            >
              <VolunteerActivism style={{color:'white'}}/>
              <p>DONATION</p>
            </span>

            <span
              className={`space-x-4 rounded-xl flex justify-between items-center p-3 cursor-pointer 
                ${activeContent === 'report' ? 'bg-[#54C2B5] text-white' : 'bg-gray-200 hover:bg-[#54C2B5] hover:text-white'}`}
              onClick={() => setActiveContent('report')}
            >
              <Report style={{color:'white'}}/>
              <p>REPORT</p> 
            </span>
          </div>

       <div className="bg-white rounded-xl h-[80%]">
       {renderContent()}
       </div>
    </div>
  )
}

export default BloodCollection