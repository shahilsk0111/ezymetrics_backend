const { generateCSV, generatePDF } = require('../services/reportService');

exports.generateReport = async (req, res) => {
  const { type } = req.query;
  try {
    if (type === 'csv') {
      const csv = await generateCSV();
      res.header('Content-Type', 'text/csv');
      res.attachment('report.csv');
      res.send(csv);
    } else if (type === 'pdf') {
      const pdf = await generatePDF();
      res.contentType('application/pdf');
      res.send(pdf);
    } else {
      res.status(400).send('Invalid report type. Choose pdf or csv.');
    }
  } catch (error) {
    res.status(500).send({ error: 'Error generating report.' });
  }
};
