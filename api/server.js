const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')
const session = require('express-session')

const KnexSessionStore = require('connect-session-knex')(session)

const contactsRouter = require('../routes/contacts/contacts-router.js');
const authRouter = require('../routes/auth/auth-router.js')

const server = express();

const sessionConfig = {
    name: 'ducky',
    secret: 'umbrella academy',

    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },

    resave: false,
    saveUninitialized: false,

    store: new KnexSessionStore({
        knex: require('../data/db-config.js'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
    })
}

//Global Middleware
server.use(morgan('combined'))
server.use(helmet())
server.use(express.json());
server.use(session(sessionConfig))

//Routes
server.use('/api/contacts', contactsRouter);
server.use('/api/users', authRouter)

module.exports = server;