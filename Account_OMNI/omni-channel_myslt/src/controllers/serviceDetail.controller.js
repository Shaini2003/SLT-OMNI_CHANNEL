const { fetchServiceDetailFromOmni } = require('../services/externalOmniService');
const ServiceDetail = require('../models/ServiceDetail');

const getServiceDetail = async (req, res) => {
  const telephoneNo = req.query.telephoneNo;

  if (!telephoneNo) {
    return res.status(400).json({ message: 'telephoneNo is required' });
  }

  try {
    const data = await fetchServiceDetailFromOmni(telephoneNo);

    // Save response in DB
    await ServiceDetail.create(data);

    res.status(200).json(data);
  } catch (error) {
    console.error('Service detail fetch failed:', error.message);
    res.status(500).json({ message: 'Failed to retrieve service detail' });
  }
};

module.exports = { getServiceDetail };
