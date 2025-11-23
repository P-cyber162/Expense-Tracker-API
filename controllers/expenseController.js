const Expense = require('../models/expenseModel');
const APIFeatures = require('../utils/apiFeatures');

//GET ALL EXPENSES
exports.getAllExpenses = async(req, res) => {
    try{
        const features = new APIFeatures(Expense.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
        const expenses = await features.query;

        res.status(200).json({
            status: 'success',
            data: {
                expenses
            }
        })
    }catch(err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
};

//GET EXPENSE
exports.getExpense = async(req, res) => {
    try{
        const expense = await Expense.findById(req.params.id);
        if(!expense){
            return res.status(404).json({
                status: 'fail',
                message: 'Expense not found'
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                expense
            }
    })
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid ID' 
        })
    }
};

//CREATE EXPENSE
exports.createExpense = async(req, res) => {
    try{
        const newExpense = await Expense.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                newExpense
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
};

//UPDATE EXPENSE
exports.updateExpense = async  (req, res)=> {
    try{
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!expense){
            return res.status(404).json({
                status: 'fail',
                message: 'Expense not found'
            })
        };

        res.status(201).json({
            status: 'success',
            data: {
                expense
            }
        })
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
};

//DELETE EXPENSE
exports.deleteExpense = async (req, res) => {
    try{
        const expense = await Expense.findByIdAndDelete(req.params.id);
        if(!expense){
            return res.status(404).json({
                status: 'fail',
                message: 'Expense not found'
            })
        };

        res.status(200).json({
            status: 'success',
            data: {
                expense
            }
        })
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }  
};

