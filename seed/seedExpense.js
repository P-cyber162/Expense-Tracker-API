const fs = require('fs');
const Expense = require('../models/expenseModel');

const seedExpense = async() => {
    try{
        const expenseJson = JSON.parse(fs.readFileSync('./data/expense.json'));
        await Expense.deleteMany();

        await Expense.insertMany(expenseJson);
        console.log('Seeding Expense Completed 👌');
    } catch(err) {
        console.log('Seeding Expense Failed 😢: ', err.message);
    }
};

module.exports = seedExpense;