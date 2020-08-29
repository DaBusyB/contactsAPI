const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')

const contactsRouter = require('../routes/contacts/contacts-router.js');
const authRouter = require('../routes/auth//auth-router.js')

const server = express();

//Global Middleware
server.use(morgan('combined'))
server.use(helmet())
server.use(express.json());



//Routes
server.use('/api/contacts', contactsRouter);
server.use('api/auth', authRouter)

module.exports = server;