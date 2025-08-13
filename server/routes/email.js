const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async(req, res) => {
    const { name, email, message } = req.body;
    // `"${name}" <no-reply@ekjrakennus.fi>`
    // gmail pass: gdjooheuoapkljll
    console.log("Mail content: " + name + ", " + email + ", " + message);
    console.log("Process.env - " + process.env.SMTP_USER);
    // Set up the transporter
    const transporter = nodemailer.createTransport({
        //service: 'Gmail', // or use host/port for other SMTP
        host: process.env.SMTP_HOST,      // "smtp.gmail.com",
        port: process.env.SMTP_PORT,
        secure: true,
        //requireTLS: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    // Email options
    const mailOptions = {

        from: process.env.SMTP_USER, // Shown as the sender
        replyTo: email, // When you hit "Reply", it goes to the real sender
        to: process.env.SMTP_RECEIVER,//process.env.EMAIL_USER, // Your address (or the receiver)
        subject: `Message from ${name}`,
        text: `Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        //envelope: { from: `no-reply@ekjrakennus.fi`, to: `info@ekjrakennus.fi` },
        //html: `<p><b>From:</b> ${name} &lt;${email}&gt;</p><p>${message}</p>`

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