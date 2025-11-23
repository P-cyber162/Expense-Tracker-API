const express =  require('express');
const connectDB = require('./config/db');
const seedCategory = require('./seed/seedCategory');
const seedExpenses = require('./seed/seedExpense');
const seedUsers = require('./seed/seedUsers');
const app = require('./app');

const startServer = async () => {
    try{//CONNECT TO DATABASE
        await connectDB();

        //SEED CATEGORIES
        await seedCategory();

        //SEED EXPENSES
        await seedExpenses();

        //SEED USERS
        await seedUsers();
        const port = process.env.PORT || 3000
        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}`);
        });
    }catch(err){
        console.log('ERROR ', err);
    };
}

startServer();