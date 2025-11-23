const fs = require('fs');
const Category = require('../models/categoryModel');

const seedCategory = async () => {
    try{
        const categoryJson = JSON.parse(fs.readFileSync('./data/category.json'));
        await Category.deleteMany();

        await Category.insertMany(categoryJson);
        console.log('Seeding Category Completed 👌');

    }catch(err){
        console.log('Seeding Category failed 😢: ', err.message);
    };
};

module.exports = seedCategory;