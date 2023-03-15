const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/handleError');
const connectDb = require('./config/db');
const cors = require('cors');

const port = process.env.PORT || 5000;
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/grats', require('./routes/gratitudeRoutes'))

// app.use(errorHandler);

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})