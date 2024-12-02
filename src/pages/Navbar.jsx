import React from "react";

const Navbar = () => {
  const navbarStyle = {
    width: "100%",
    height: "auto",
    overflow: "hidden",
    display: "block", // Default display for mobile
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover", // Ensures the image covers the navbar without distortion
  };

  // Media query logic for hiding the navbar on laptops (min-width: 1024px)
  const mobileStyle = `
    @media (min-width: 1024px) {
      .navbar-image {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyle}</style>
      <div style={navbarStyle}>
        <img
          src="/navbar.jpg"
          alt="Navbar"
          className="navbar-image"
          style={imageStyle}
        />
      </div>
    </>
  );
};

export default Navbar;
