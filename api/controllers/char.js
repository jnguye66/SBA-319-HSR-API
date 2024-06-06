const Char = require('../models/Char');

module.exports = {
  createChar,
};

async function createChar(req, res) {
  try {
    const char = await Char.create(req.body);

    res.status(200).json(char);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}
