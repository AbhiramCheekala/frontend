import React, { useEffect, useState } from "react";
import axios from "axios";
import WishCardViewer from "./WishCardViewer";
import "./wishlist.css";

const WishesList = () => {
  const [wishes, setWishes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const wishesPerPage = 1;

  useEffect(() => {
    axios
      .get(`https://deployment-jade-three.vercel.app/wishes`)
      .then((response) => {
        setWishes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wishes:", error);
      });
  }, []);

  const totalPages = Math.ceil(wishes.length / wishesPerPage);
  const startIndex = (currentPage - 1) * wishesPerPage;
  const paginatedWishes = wishes.slice(startIndex, startIndex + wishesPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Wishes</h1>

      <div className="grid">
        {paginatedWishes.map((wish) => (
          <WishCardViewer key={wish._id} wish={wish} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          className={`button ${currentPage === 1 ? "disabled" : ""}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-info">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          className={`button ${currentPage === totalPages ? "disabled" : ""}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WishesList;
