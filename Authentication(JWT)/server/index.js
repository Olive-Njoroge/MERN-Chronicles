const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db')
const mongoose = require('mongoose');
connectDB();