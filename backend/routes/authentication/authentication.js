require("dotenv").config();
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { user, post } = new PrismaClient();
var nodemailer = require("nodemailer");
const { getJWT, verifyJWT} = require("../../utils/jwt");
// const { JSON } = require("express");
const dbUtil = require("../../utils/database");

router.get('/verifyJWT', async (req, res) => {
    try {
        const jwt = req.query.jwt;
        res.json(verifyJWT(jwt));
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

/*const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: 'brainbeatsdev@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
});

// Send Email to user to verify login
router.post('/sendVerificationEmail', async (req, res) => {
    try {
        const { email, subject, text } = req.body;
        const userExists = await prisma.user.findUnique({
            where: { email },
            select: { email: true }
        });

        // If the user is an existing user, then send a verification email based on their ID
        if (userExists) {
            const mailData = {
                from: 'brainbeatsdev@gmail.com',  // Sender address
                to: email,                           // List of receivers
                subject: subject,
                text: 'Verify your login to BrainBeats by clicking the following link, or copy and paste it into your browser: ',
                html: '<a href=\"https://www.brainbeats.dev/verify/${userExists._id}\">Verify Email</a>',
            };

            transporter.sendMail(mailData, function (err, info) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log('Email Sent: ' + info.response);
                }

                res.status(200).send({ message: "Mail send", message_id: info.messageId });
            });
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ msg: "User does not exist." })
    }
});*/


module.exports = router;