require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ImageRouter = require('./routes/imageRouter.js');
const authRouter = require('./routes/authRoutes.js');
const app = express();

app.use(cors({origin:true}));
app.use(express.json());
app.use('/api/v1/images',ImageRouter);
app.use('/api/v1/auth',authRouter);

module.exports = app;