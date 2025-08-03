const axios = require('axios');
require('dotenv').config();

const fetchServiceDetailFromOmni = async (telephoneNo) => {
  const url = `${process.env.OMNI_BASE_URL}/GetServiceDetailRequest?telephoneNo=${telephoneNo}`;

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${process.env.OMNI_TOKEN}`
  };

  const response = await axios.get(url, { headers });
  return response.data;
};

module.exports = { fetchServiceDetailFromOmni };
