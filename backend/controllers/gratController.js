const asyncHandler = require('express-async-handler')
const Grat = require('../models/gratitude')
const User = require('../models/user')

const getAllGrats = asyncHandler(async (req, res) => {
    const grats = await Grat.find()

    res.status(200).json(grats)
})

const getGratById = asyncHandler(async (req, res) => {
    const grat = await Grat.findById(req.params.id);
    if (!grat) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json(grat)
})

const getOwnGrats = asyncHandler(async (req, res) => {
    const grats = await Grat.find({
        user: req.user.id
    })
    res.status(200).json(grats)
})

const getAllCount = asyncHandler(async (req, res) => {
    const grats = await Grat.find()

    res.status(200).json({
        size: grats.length
    })
})

const getRandomGrat = asyncHandler(async (req, res) => {
    const grat = await Grat.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(grat)
})

const setGrat = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const grat = await Grat.create({
        text: req.body.text,
        name: req.body.name ? req.body.name : 'Anonymous',
        user: req.user.id
    })
    res.status(200).json(grat)
})

const updateGrat = asyncHandler(async (req, res) => {

    const grat = await Grat.findById(req.params.id);

    if (!grat) {
        res.status(400)
        throw new Error('Please add an id')
    }


    const user = await User.findById(req.user.id);
    //Check for user
    if (!user) {
        res.status(401);
        throw new Error('User not found')
    }

    if (grat.user.toString() !== user.id) {
        res.status(401)
        throw new Error('Wrong user')
    }


    const updatedGrat = await Grat.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGrat)
})

const deleteGrat = asyncHandler(async (req, res) => {
    const grat = await Grat.findByIdAndRemove(req.params.id);
    if (!grat) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    res.status(200).json(`Deleted grat ${req.params.id}`)
})

module.exports = {
    getAllGrats,
    getRandomGrat,
    getAllCount,
    getOwnGrats,
    getGratById,
    setGrat,
    updateGrat,
    deleteGrat
}