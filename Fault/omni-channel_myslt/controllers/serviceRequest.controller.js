const ServiceRequest = require('../models/serviceRequest.model');

// POST /tmf-api/serviceRequestManagement/v1/serviceRequest
const createServiceRequest = async (req, res) => {
  try {
    const newRequest = new ServiceRequest(req.body);
    const saved = await newRequest.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all
const getAllRequests = async (req, res) => {
  try {
    const requests = await ServiceRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createServiceRequest,
  getAllRequests
};
