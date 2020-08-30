const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')

const contactsRouter = require('../routes/contacts/contacts-router.js');
const usersRouter = require('../routes/users/users-router.js')

const server = express();

//Global Middleware
server.use(morgan('combined'))
server.use(helmet())
server.use(express.json());

//Routes
server.use('/api/contacts', contactsRouter);
server.use('/api/users', usersRouter)

module.exports = server;