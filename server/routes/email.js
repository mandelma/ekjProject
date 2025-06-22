const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async(req, res) => {
    const { name, email, message } = req.body;

    console.log("Mail content: " + name + ", " + email + ", " + message);
    console.log("Process.env - " + process.env.EMAIL_USER);
    // Set up the transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or use host/port for other SMTP
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email options
    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Shown as the sender
        replyTo: email, // When you hit "Reply", it goes to the real sender
        to: process.env.EMAIL_USER, // Your address (or the receiver)
        subject: `Message from ${name}`,
        text: `Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`



        // from: email,
        // to: process.env.RECEIVER_EMAIL,
        // subject: `Viesti käyttäjältä ${name}`,
        // text: message
    };


    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent!' });
    } catch (err) {
        console.error('Email error:', err.message);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
})

module.exports = router;