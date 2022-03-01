require('dotenv').config();

const emailContent = {
  resetEmail: (name, token) => {
    const link = `${process.env.BASE_URL}/confirm-reset-password?t=${token}`;
    return `
            ${name === '' ? 'Hi there!' : `Dear ${name},`}
            <br><br>
            We just got a request to reset your account's password...
            <br>
            If it was not you, please let us know by replying to this email!
            <br><br>
            To continue your reset password request, please click the link below. 
            <br>
            <a href="${link}">Click on me!</a>
            <br><br>
            Thank you and good bye! 👋
            <br><br>
            Warm regards,
            <br>
            ${process.env.AUTHOR}
        `;
  },
};

module.exports = emailContent;
