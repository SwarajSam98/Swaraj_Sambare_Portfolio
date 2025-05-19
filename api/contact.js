const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message, phone } = req.body;

    // Nodemailer configuration
    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail = {
      from: `${firstName} ${lastName}`,
      to: "ssambare11111@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await contactEmail.sendMail(mail);
      res.status(200).json({ status: "Message Sent" });
    } catch (error) {
      res.status(500).json({ error: "Error sending message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
