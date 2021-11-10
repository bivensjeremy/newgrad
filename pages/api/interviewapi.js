import prisma from "../../config/prismaClient";

export default async function handler (req, res) {
    require('dotenv').config()
    const HOST = process.env.NEXT_PUBLIC_HOST
    const PASS = process.env.NEXT_PUBLIC_PASS
    const USER = process.env.NEXT_PUBLIC_USER
    
    await prisma.offer.create({
        data:{
            offerStatus: 'Interview',
            firstName: req.body.candidateFirstName,
            lastName: req.body.candidateLastName,
            department: req.body.department
        }
    });
    const nodemailer = require('nodemailer')
    const smtpTrans = nodemailer.createTransport({
        host: HOST,
        port: 465,
        secure: true,
        auth: {
            user: USER,
            pass: PASS
       }
    });
    const mailOpts = {
        from: 'contact@bivensblueprint.com',
        to: 'admin@bivensblueprint.com',
        subject: 'New Grad Website | Candidate for Interview',
        html: `<h1>Follow Up Interview Requested!</h1>
        <h2>${req.body.manager} has requested a follow-up interview for ${req.body.candidateFirstName} ${req.body.candidateLastName} for the ${req.body.department}.</h2>
        <h2>Please check the candidate profile in Taleo to take the appropriate action.</h2>`
    }
    smtpTrans.sendMail(mailOpts, function(err, success) {
        if (err) {
            res.json({
                status: 'fail'
            })
            console.log(err)
            } else {
                res.json({
                status: 'Interview Success'
                })
        }
    });
};