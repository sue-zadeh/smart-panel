const express = require('express')
const router = express.Router()

router.post('/add-user', async (req, res) => {
  try {
    const newUser = req.body
    res.status(201).json({ message: 'Contact added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
