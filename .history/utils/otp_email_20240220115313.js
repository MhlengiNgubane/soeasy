const nodemailer = require('nodemailer');

async function sendEmail(userEmail, message){
    const transporter = nodemailer.createTransport({
        service: 'email',
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASSWORD
        }
    })
}