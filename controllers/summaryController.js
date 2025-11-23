const Expense = require('../models/expenseModel');

exports.getMonthlySummary = async (req, res) => {
    try{
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const startMonth = new Date(currentYear, currentMonth, 1);
        const endMonth= new Date(currentYear, currentMonth + 1, 0);
        
        const expenses =await Expense.find({
            date: {
                $gte: startMonth,
                $lte: endMonth
            }
        })

        res.status(200).json({
            status: 'success',
            data: {
                expenses
            }
        });

    }catch(err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
};


exports.getYearlySummary = async (req, res) => {
    try{
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        const startYear = new Date(currentYear, 0, 1);
        const endYear= new Date(currentYear + 1, 0 , 1);
        
        const expenses = await Expense.find({
            date: {
                $gte: startYear,
                $lte: endYear
            }
        })

        res.status(200).json({
            status: 'success',
            data: {
                expenses 
            }
        }); 

    }catch(err) {
        res.status(500).json({
            status: 'fail',
            message: 'Internal Server Error'
        })
    }
};

