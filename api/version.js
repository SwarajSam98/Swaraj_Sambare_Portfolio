module.exports = async (req, res) => {
  res.status(200).json({ version: process.version });
};
