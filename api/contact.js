const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, message, phone } = req.body;

    const msg = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent successfully");
      res.status(200).json({ status: "Message Sent" });
    } catch (error) {
      console.error("Error sending email:", error.response ? error.response.body : error.message);
      res.status(500).json({ error: "Error sending message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
