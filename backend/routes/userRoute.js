const express = require('express')
const { protect } = require('../middleware/authmiddleware')
const router = express.Router();

const { registerUser, loginUser, getMe } = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router;