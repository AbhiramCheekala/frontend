import React from "react";
import "./cake.css";
import Navbar from "./Navbar";

const Cake = () => {
  return (
    <>
      <Navbar />
      <div className="event-section">
        <h2 className="birthday-message">You're Invited to a Cake Cutting!</h2>
        <p className="event-invitation">
          Join us for a sweet celebration as we cut the cake!
        </p>
        <p className="event-invitation">
          📍 <b>Location:</b> [ place not yet fixed ]
        </p>
        <p className="event-invitation">
          🕒 <b>Time:</b> 7:00 PM - 8:00 PM
        </p>
        <img
          src="/img6.jpg" // Replace with the URL of your cake image
          alt="Cake Cutting"
          className="event-photo"
        />
      </div>
    </>
  );
};

export default Cake;
