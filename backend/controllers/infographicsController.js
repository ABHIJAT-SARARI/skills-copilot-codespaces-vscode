
const Infographic = require('../models/Infographic');

// ...existing code...
exports.getAllInfographics = async (req, res) => {
  try {
    const infographics = await Infographic.find();
    res.json(infographics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createInfographic = async (req, res) => {
  const infographic = new Infographic({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    usedBy: req.body.usedBy,
    tags: req.body.tags
  });

  try {
    const newInfographic = await infographic.save();
    res.status(201).json(newInfographic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// ...existing code...