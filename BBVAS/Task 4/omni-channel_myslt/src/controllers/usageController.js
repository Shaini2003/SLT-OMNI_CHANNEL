const Usage = require('../models/Usage');

exports.getDailyUsage = async (req, res) => {
  const { subscriberID } = req.query;

  if (!subscriberID) {
    return res.status(400).json({
      isSuccess: false,
      errorMessage: 'Missing subscriberID',
      exceptionDetail: null,
      dataBundle: null,
      errorShow: true,
      errorCode: '400'
    });
  }

  try {
    const dailylist = await Usage.find({ subscriberID });

    res.json({
      isSuccess: true,
      errorMessege: null,
      exceptionDetail: null,
      dataBundle: {
        previousmonths: null,
        dailylist
      },
      errorShow: null,
      errorCode: null
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      errorMessage: error.message,
      exceptionDetail: error.stack,
      dataBundle: null,
      errorShow: true,
      errorCode: '500'
    });
  }
};
