import React from "react";
//import defaultAvatar from "./img4.png";
const WishCardViewer = ({ wish }) => {
  const handleImageError = (e) => {
    e.target.src = "./img4.png";
  };

  return (
    <div className="card">
      <img
        src={wish.image || "./img4.png"}
        alt="Wish"
        className="card-image"
        onError={handleImageError}
      />
      <div className="card-content">
        <h3 className="card-title">{wish.name}</h3>
        <p className="card-description">{wish.wish}</p>
        <p className="card-memories">{wish.memories}</p>
        <p className="card-timestamp">
          {new Date(wish.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default WishCardViewer;
