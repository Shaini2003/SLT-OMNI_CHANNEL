const DailyUsage = require('../models/DailyUsage');

exports.getPreviousUsage = async (req, res) => {
    const { subscriberID, billDate, monthIndex } = req.query;

    try {
        const usage = await DailyUsage.findOne({ subscriberID, billDate, monthIndex });

        if (!usage) {
            return res.json({
                isSuccess: false,
                errorMessege: "No usage data found.",
                exceptionDetail: null,
                dataBundle: null,
                errorShow: true,
                errorCode: "404"
            });
        }

        res.json({
            isSuccess: true,
            errorMessege: null,
            exceptionDetail: null,
            dataBundle: {
                previousmonths: usage.previousmonths,
                dailylist: usage.dailylist
            },
            errorShow: null,
            errorCode: null
        });

    } catch (error) {
        res.status(500).json({
            isSuccess: false,
            errorMessege: "Internal Server Error",
            exceptionDetail: error.message,
            dataBundle: null,
            errorShow: true,
            errorCode: "500"
        });
    }
};
