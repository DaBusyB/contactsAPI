const express = require('express')
const router = express.Router()

const knex = require('../../data/db-config.js')


const bcrypt = require('bcryptjs')

router.get('/', async (req, res) => {

    try {
        const getUsers = await knex('users')
        res.json(getUsers)
    } catch(err) {
        res.status(404).json({message: 'users not found'})
    }
})

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

router.post('/login', (req, res) => {

})

router.get('/logout', (req, res) => {

})

module.exports = router