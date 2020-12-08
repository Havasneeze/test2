import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));  // sending image that could be large in size
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // these are to populate sender reqs
app.use(cors());

app.use('/posts', postRoutes);  //this means all routes within postRoutes will start with posts

const CONNECTION_URL = 'mongodb+srv://Hava:Testing1234@cluster0.vvmrx.mongodb.net/test';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);  //just so there are no warnings in the console

// https://www.mongodb.com/cloud/atlas