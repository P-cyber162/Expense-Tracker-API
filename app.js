const express = require('express');
const morgan = require('morgan');

const errorMiddleware = require('./utils/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const summaryRoutes = require('./routes/summaryRoutes');

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
};

app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/expense', expenseRoutes);
app.use('/api/v1/summary', summaryRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Cannot find ${req.originalUrl} on this server`
    })
});

app.use(errorMiddleware);

module.exports = app;