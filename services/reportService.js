const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');
const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');

exports.generateCSV = async () => {
  const leads = await Lead.find();
  const campaigns = await Campaign.find();
  
  const data = [...leads, ...campaigns];
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(data);
  return csv;
};

exports.generatePDF = async () => {
  const leads = await Lead.find();
  const campaigns = await Campaign.find();
  
  const doc = new PDFDocument();
  let buffers = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    let pdfData = Buffer.concat(buffers);
    return pdfData;
  });

  doc.text(`Leads Report\n\n`);
  leads.forEach(lead => doc.text(`${lead.name} - ${lead.email}\n`));
  
  doc.text(`\nCampaigns Report\n\n`);
  campaigns.forEach(campaign => doc.text(`${campaign.name} - ${campaign.budget}\n`));

  doc.end();
};
