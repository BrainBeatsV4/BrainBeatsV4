require("dotenv").config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { user, post } = new PrismaClient();
var nodemailer = require("nodemailer");
const jwtAPI = require("../../utils/jwt");
// const { JSON } = require("express");

// TODO : Don't think this is needed, change it to actually work for our case for downloading to
// Get user midi information by ID
router.get('/findMidi', async (req, res) => {

    const { username } = req.body;
    const userExist = await prisma.user.findUnique({
        where: { username },
    });

    if (!userExist) {
        return res.status(400).json({
            msg: "User not found"
        })
    } else {

        const posts = await prisma.user.findUnique({
            where: { username: username },
            select: {
                posts: {
                    select: {
                        midi: true,
                        data: true
                    }
                }
            }
        });
        res.json(posts);
    }

})

module.exports = router;