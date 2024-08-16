import React, { useState, useEffect } from "react";
import "../TableB/TableBookingForm.css";

const TableBooking = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/seats")
      .then((response) => response.json())
      .then((data) => setSeats(data));
  }, []);

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBooking = () => {
    fetch("http://localhost:5000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seatNumbers: selectedSeats }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setSelectedSeats([]);
        // Fetch updated seat data
        fetch("http://localhost:5000/api/seats")
          .then((response) => response.json())
          .then((data) => setSeats(data));
      });
  };

  // Function to create a 5x5 matrix layout
  const createSeatMatrix = (seatsArray) => {
    const matrix = [];
    for (let i = 0; i < 5; i++) {
      const row = seatsArray.slice(i * 5, i * 5 + 5);
      matrix.push(row);
    }
    return matrix;
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div className="seat-grid">
        {createSeatMatrix(seats).map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seat) => (
              <div
                key={seat.seatNumber}
                className={`seat ${
                  seat.isBooked
                    ? "booked"
                    : selectedSeats.includes(seat.seatNumber)
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  !seat.isBooked && toggleSeatSelection(seat.seatNumber)
                }
              >
                {seat.seatNumber}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleBooking} className="book-button">
        Book Now
      </button>
    </div>
  );
};

export default TableBooking;
