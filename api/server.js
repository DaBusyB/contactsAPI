const express = require("express");


const contactsRouter = require("../routes/contacts/contacts-router.js");

const app = express();

//Middleware
app.use(express.json());



//Routes
app.use("/api/contacts", contactsRouter);

module.exports = app;