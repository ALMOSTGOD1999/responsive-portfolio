   const express = require("express");
    const nodemailer = require("nodemailer");
    const cors = require("cors");
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: "mukhopadhyayrahul118@gmail.com",
        pass: "Rahul@1999"
      }
    });
app.post("/api/contact", (req, res) => {
      const { name, email, message } = req.body;
      const mailOptions = {
        from: email,
        to: "mukhopadhyayrahul118@gmail.com",
       subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ success: false, message: 'Email failed to send.' });
    }
    res.send({ success: true, message: 'Email sent successfully!' });
  });
});
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));