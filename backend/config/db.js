const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`mongo db connected at ${conn.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDb;