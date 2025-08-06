const express = require('express');
const { register, login ,updateProfile} = require('../controllers/auth.controller');
const protect = require('../middlewares/auth');
const { permit } = require('../middlewares/role');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/profile', protect, updateProfile);
module.exports = router;
