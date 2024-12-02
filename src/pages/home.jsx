import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  const adminView = () => {
    navigate("/admin");
  };

  const handleWishRedirect = () => {
    navigate("/send-wish");
  };

  const handleCakeCutting = () => {
    navigate("/cake-cutting");
  };

  const handleLunchRedirect = () => {
    navigate("/lunch-event");
  };

  return (
    <div className="container">
      <Navbar />
      <h1 className="birthday-message">Happy Birthday Mouni!</h1>
      <img src="/img5.jpg" alt="Birthday" className="friend-photo" />
      <p className="message-content">
        Send your secret wish to her by clicking the button below.
      </p>

      <button onClick={handleWishRedirect} className="wish-button">
        Send Your Wish
      </button>

      <h2>Cake Cutting</h2>
      <img src="/img6.jpg" alt="Cake Cutting" className="event-photo" />
      <p className="event-invitation">
        Join us for the cake cutting ceremony! [ if and only if she gives party
        for us 😂 ] Click below for details.
      </p>
      <button onClick={handleCakeCutting} className="event-button">
        View Cake Cutting Details
      </button>

      <h2>Lunch Invitation</h2>
      <img
        src="/img3.jpeg" // Replace with the lunch image URL
        alt="Lunch Invitation"
        className="event-photo"
      />
      <p className="event-invitation">
        You're invited to join us for a delightful lunch! [ if she provides us
        😂 ] Click below for more details.
      </p>
      <button onClick={handleLunchRedirect} className="event-button">
        View Lunch Details
      </button>

      <p className="event-invitation">
        Gifts and Things can be sent to the{" "}
        <span onClick={adminView}> Admin </span>
      </p>
    </div>
  );
};

export default Home;
