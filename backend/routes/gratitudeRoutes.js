const express = require('express');
const router = express.Router();


const { getAllGrats, getRandomGrat, getAllCount, setGrat, updateGrat, deleteGrat, getGratById } = require('../controllers/gratController')

router.get('/', getAllGrats);

router.get('/:id', getGratById);

router.get('/random', getRandomGrat);

router.get('/count', getAllCount)

router.post('/', setGrat);

router.put('/:id', updateGrat);

router.delete('/:id', deleteGrat);

module.exports = router;