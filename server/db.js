// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        // Exit process on failure
        process.exit(1);
    }
};

module.exports = connectDB;
