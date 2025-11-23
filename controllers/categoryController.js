const Category = require('../models/categoryModel');

//GET ALL CATEGORY
exports.getAllCategories = async(req, res) => {
    try{
        const categories = await Category.find();

        res.status(200).json({
            status: 'success',
            data: {
                categories
            }
        })
    }catch(err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
};

//GET CATEGORY
exports.getCategory = async(req, res) => {
    try{
        const category = await Category.findById(req.params.id);
        if(!category){
            res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                category
            }
    })
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid ID' 
        })
    }
};

//CREATE CATEGORY
exports.createCategory = async(req, res) => {
    try{
        const newCategory = await Category.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                newCategory
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
};

//UPDATE CATEGORY
exports.updateCategory = async  (req, res)=> {
    try{
        const category = await   Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!category){
            res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            })
        };

        res.status(201).json({
            status: 'success',
            data: {
                category
            }
        })
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
};

//DELETE CATEGORY
exports.deleteCategory = async (req, res) => {
    try{
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category){
            res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            })
        };

        res.status(200).json({
            status: 'success',
            data: {
                category
            }
        })
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }  
};

