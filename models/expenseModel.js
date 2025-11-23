const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'An amount mustbe provided']
    },
    date: {
        type: Date,
        required: [true, 'A date must be provided']
    },
    category: {
        type: String,
        enums: ['Groceries', 'Leisure',  'Clothing', 'Health', 'Study', 'Others'],
        required: [true, 'A category must be specified']
    },
    notes: {
        type: String,
        trim: true
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;