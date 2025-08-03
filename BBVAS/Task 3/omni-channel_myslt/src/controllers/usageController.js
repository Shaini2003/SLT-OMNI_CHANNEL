const EnhancedUsage = require('../models/DailyUsage');

exports.getEnhancedCurrentDailyUsage = async (req, res) => {
  const { subscriberID, billDate } = req.query;

  try {
    const record = await EnhancedUsage.findOne({ subscriberID, billDate });

    if (!record) {
      return res.status(404).json({
        isSuccess: false,
        errorMessege: "No data found",
        exceptionDetail: null,
        errorCode: "NOT_FOUND"
      });
    }

    res.json({
      "@type": "EnhancedCurrentDailyUsage",
      "@baseType": "Usage",
      "@schemaLocation": "http://tmforum.org/schema",
      isSuccess: true,
      errorMessege: null,
      exceptionDetail: null,
      dataBundle: {
        previousmonths: record.previousmonths,
        dailylist: record.dailylist
      },
      errorShow: null,
      errorCode: null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      isSuccess: false,
      errorMessege: "Internal Server Error",
      exceptionDetail: err.message,
      errorCode: "SERVER_ERROR"
    });
  }
};
