const { Router } = require('express');
const charsCtrl = require('../controllers/char.js');

const router = Router();

router.post('/', charsCtrl.createChar);

module.exports = router;
