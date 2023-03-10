const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/handleError');
const connectDb = require('./config/db');

const port = process.env.PORT || 5000;
connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/grats', require('./routes/gratitudeRoutes'))

// app.use(errorHandler);

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})