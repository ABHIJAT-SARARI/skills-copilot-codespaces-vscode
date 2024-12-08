
const express = require('express');
const router = express.Router();
const infographicsController = require('../controllers/infographicsController');

router.get('/', infographicsController.getAllInfographics);
router.post('/', infographicsController.createInfographic);

module.exports = router;