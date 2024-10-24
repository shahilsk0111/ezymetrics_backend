const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');
const dummyData = require('../data/dummyData.json');

exports.fetchAndStoreData = async (req, res) => {
  try {
    // Simulate data fetching
    const { leads, campaigns } = dummyData;

    // Store Leads
    await Lead.insertMany(leads);

    // Store Campaigns
    await Campaign.insertMany(campaigns);

    res.status(200).send('Data fetched and stored successfully.');
  } catch (error) {
    res.status(500).send({ error: 'Error fetching or storing data.' });
  }
};
