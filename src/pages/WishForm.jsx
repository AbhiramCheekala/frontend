import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";

const WishForm = () => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [memories, setMemories] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const ThankYou = (e) => {
    // navigate("/thankyou");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !wish) {
      setError("Name and Secret Wish are required.");
      return;
    }

    const formData = {
      name,
      wish,
      memories,
      image,
    };

    try {
      await axios.post(
        "https://deployment-jade-three.vercel.app/wish-form",
        formData
      );
      setSuccess("Your wish has been sent!");
      setName("");
      setWish("");
      setMemories("");
      setImage(null);
      setError("");
      navigate("/thankyou");
    } catch (error) {
      setError("Failed to send your wish. Please try again.");
    }
  };

  return (
    <div className="container">
      <Navbar />
      <h2>Send Your Secret Wish</h2>
      <form onSubmit={handleSubmit} className="wish-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
        <textarea
          placeholder="Your Secret Wish"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          required
          className="form-textarea"
        />
        <textarea
          placeholder="Share your memories with her in this journey"
          value={memories}
          onChange={(e) => setMemories(e.target.value)}
          className="form-textarea"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="form-input"
        />
        <button type="submit" className="submit-button" onClick={ThankYou}>
          Submit Wish
        </button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default WishForm;
