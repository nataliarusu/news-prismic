import nodemailer from "nodemailer";

// Configure Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, subject, userContact } = req.body;
    // Create email options
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_TO,
      subject: `New form submission: ${subject}`,
      text: `Title: ${title}\nSubject: ${subject}\nUser Contact: ${userContact}`,
    };

    // Send email using Nodemailer transporter
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Form submitted successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email." });
    }
  } else {
    // Return an error for unsupported methods
    res.status(405).json({ message: "Method not allowed." });
  }
}
