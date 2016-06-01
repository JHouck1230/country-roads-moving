'use strict';

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASS
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

router.post('/', function(req, res) {
  var mailOptions = {
      to: process.env.GMAIL_ADDRESS,
      subject: 'CRMO Message',
      text: `Jake,

Someone left a message for you on your website:

    Customer Name:  ${req.body.name}
    Phone Number:   ${req.body.phone}
    Email Address:  ${req.body.email}
    Message:        ${req.body.message}

Cheers,
Country Roads Moving Company`,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error || info === undefined){
        res.status(400).send(error || "No Response.");
    }
    res.send(info);
  });
});

module.exports = router;