const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Email sending
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email setup error: ", error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: `${firstName} ${lastName}`,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email error", error);
      res.status(500).json({ error: "Email failed" });
    } else {
      res.status(200).json({ message: "Message Sent" });
    }
  });
});

// Serve React frontend
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
