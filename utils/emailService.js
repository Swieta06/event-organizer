const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// transporter.verify().then(console.info).catch(console.error)

const emailService = {
  sendEmail: async (to, subject, content) => {
    try {
      await transporter.sendMail({
        from: `${process.env.AUTHOR} <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: content,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = emailService;
