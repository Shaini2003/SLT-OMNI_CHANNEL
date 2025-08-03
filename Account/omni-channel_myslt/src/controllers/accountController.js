const UserInfo = require('../models/UserInfo');

exports.viewUserInfo = async (req, res) => {
  const { userName } = req.query;

  if (!userName) {
    return res.status(400).json({ error: 'Missing required parameter: userName' });
  }

  try {
    console.log("🔍 Searching for userName:", userName);

    const allUsers = await UserInfo.find({});
    console.log("👥 All users:", allUsers.map(u => u.userName));

    // 🔧 Regex-based flexible query
    const user = await UserInfo.findOne({
      userName: { $regex: `^${userName.trim()}$`, $options: 'i' }
    });

    console.log("✅ Query result:", user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      id: user._id,
      href: `/tmf-api/accountManagement/v5/account/${user._id}`,
      name: user.name,
      userName: user.userName,
      osType: user.osType,
      appVersion: user.appVersion,
      fiebaseId: user.fiebaseId,
      altrContact: user.altrContact,
      '@type': 'UserAccount',
      '@baseType': 'Account'
    });
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    res.status(500).json({ error: error.message });
  }
};
