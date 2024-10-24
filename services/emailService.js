const nodemailer = require('nodemailer');
const Campaign = require('../models/campaignModel');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendAlert = async () => {
  const campaigns = await Campaign.find();
  
  campaigns.forEach(campaign => {
    if (campaign.leads > process.env.ALERT_THRESHOLD) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'alert@example.com',
        subject: 'Lead Threshold Alert',
        text: `Campaign ${campaign.name} has crossed the lead threshold with ${campaign.leads} leads.`
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Alert sent:', info.response);
        }
      });
    }
  });
};
