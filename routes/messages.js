'use strict';

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// var xoauth2 = require('xoauth2');

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'josh123090@gmail.com',
        pass: process.env.GMAIL_PASS
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

router.post('/', function(req, res) {
  console.log('req.body: ', req.body);
  var mailOptions = {
      to: 'josh123090@gmail.com',
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
    if(error){
        res.send(error);
    }
    console.log('Message sent: ' + info.response);
    res.send(info.response)
  });
});

module.exports = router;