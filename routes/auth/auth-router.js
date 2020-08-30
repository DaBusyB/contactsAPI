const express = require('express')
const router = express.Router()
const knex = require('../../data/db-config.js')


const bcrypt = require('bcryptjs')

router.post('/reqister', async (req, res) => {
    let user = req.body

    const hashedPassword = bcrypt.hashSync(user.password, 15)
    user.password = hashedPassword

    // try {
    //     const savedUser = await 
    // } catch(err) {

    // }
})

router.post('login', (req, res) => {

})

module.exports = router