const express = require('express')
const router = express.Router()

const knex = require('../../data/db-config.js')


const bcrypt = require('bcryptjs')



router.post('/register', async (req, res) => {
     newUser = req.body

    const hashedPassword = bcrypt.hashSync(newUser.password, 15)
    newUser.password = hashedPassword

    try {
        const savedUser = await knex('users').insert(newUser)
        res.status(201).json(savedUser)
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// router.post('login', (req, res) => {

// })

module.exports = router