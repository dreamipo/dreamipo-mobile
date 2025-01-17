// server.js

const express = require("express");
const twilio = require("twilio");
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let otpStore = {}; // In-memory OTP storage for simplicity (use a database in production)

// Initialize Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send OTP via SMS
app.post("/send-otp", async (req, res) => {
  const { phoneNumber } = req.body;

  // Generate OTP
  const otp = crypto.randomInt(100000, 999999); // Random 6-digit OTP
  otpStore[phoneNumber] = otp;

  try {
    // Send OTP to phone number using Twilio
    await client.messages.create({
      body: `Your OTP code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    res.status(200).send("OTP sent successfully!");
  } catch (error) {
    res.status(500).send("Error sending OTP");
  }
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (otpStore[phoneNumber] && otpStore[phoneNumber] === parseInt(otp)) {
    delete otpStore[phoneNumber]; // Delete OTP after verification
    res.status(200).send("OTP verified successfully!");
  } else {
    res.status(400).send("Invalid OTP");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
