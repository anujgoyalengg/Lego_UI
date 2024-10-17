const mongoose = require('mongoose');

const MONGO_URI = process.env.DATABASEURI

const ConnectToDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`Connected to MongoDB`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

module.exports = ConnectToDB