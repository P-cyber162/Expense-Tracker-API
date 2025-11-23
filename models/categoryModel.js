const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'A name must be provided']
    },
    description: {
        type: String,
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;