import React from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import Event from '../../components/Events/event'

const contStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
}

const EventsHome = () => {
  return(
    
      <MainLayout>AKAI EVENTS INDEX PAGE
        <div className="cont" style={contStyle}>
          <Event/>
        </div>
      </MainLayout>
  );
};

export default EventsHome;
