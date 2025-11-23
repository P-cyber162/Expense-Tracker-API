const fs = require('fs');
const User = require('../models/userModel');

const seedUsers = async ()=> {
    try{
        const usersJson = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));
        await User.deleteMany();

        await User.insertMany(usersJson);
        console.log('Seeding Users Completed 👌');

    } catch(err) {
        console.log('Seeding Users Failed 😢', err.message);
    }
}

module.exports = seedUsers;