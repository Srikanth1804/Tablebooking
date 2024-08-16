const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/hotelBooking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Define the Seat Schema
const seatSchema = new mongoose.Schema({
  seatNumber: String,
  isBooked: { type: Boolean, default: false },
});

// Create a Seat model
const Seat = mongoose.model("Seat", seatSchema);

// API Endpoints

// Get all seats
app.get("/api/seats", async (req, res) => {
  const seats = await Seat.find();
  res.json(seats);
});

// Book seats
app.post("/api/book", async (req, res) => {
  const { seatNumbers } = req.body;

  try {
    await Seat.updateMany(
      { seatNumber: { $in: seatNumbers } },
      { $set: { isBooked: true } }
    );
    res.status(200).json({ message: "Seats booked successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error booking seats" });
  }
});

// Seed the database with seat data
app.post("/api/seed", async (req, res) => {
  const seats = [];
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      seats.push(new Seat({ seatNumber: `${i}-${j}` }));
    }
  }
  await Seat.insertMany(seats);
  res.status(201).json({ message: "Database seeded successfully!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
