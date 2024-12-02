import React from "react";
import "./cake.css";
import Navbar from "./Navbar";

const Lunch = () => {
  return (
    <>
      <Navbar />
      <div className="event-section">
        <h2 className="birthday-message">You're Invited to a Special Lunch!</h2>
        <p className="event-invitation">
          Join us for a delightful lunch filled with great food and company!
        </p>
        <p className="event-invitation">
          📍 <b>Location:</b> [ place not yet fixed ]
        </p>
        <p className="event-invitation">
          🕒 <b>Time:</b> [ time not yet fixed ]
        </p>
        <img src="/img3.jpeg" alt="Lunch Invitation" className="event-photo" />
      </div>
    </>
  );
};

export default Lunch;
