const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authmiddleware')

const { getAllGrats, getOwnGrats, getRandomGrat, getAllCount,
    setGrat, updateGrat, deleteGrat, getGratById } = require('../controllers/gratController')

router.get('/', getAllGrats);

router.get('./own', protect, getOwnGrats)

router.get('/:id', protect, getGratById);

router.get('/random', getRandomGrat);

router.get('/count', getAllCount)

router.post('/', protect, setGrat);

router.put('/:id', protect, updateGrat);

router.delete('/:id', protect, deleteGrat);

module.exports = router;