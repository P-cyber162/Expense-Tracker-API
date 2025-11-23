const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const DB = process.env.DATABASE_URL.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD
);

const connectDB = async() => {
    try{
        await mongoose.connect(DB);
        console.log('DB connnection successful 👌');
    }catch (err) {
        console.log('ERROR' , err);
        process.exit(1);
    }
};

module.exports = connectDB;