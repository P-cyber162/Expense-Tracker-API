const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const bcrypt = require('bcrypt');

const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = async (req, res, next) => {
    try{
        const {name, email, password, passwordConfirm} = req.body;

        const user = await User.create({
            name,
            email,
            password,
            passwordConfirm
        })

        const token = signToken(user.id);

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user
            }
        })
    }catch(err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                status: 'fail',
                mesaage: 'Please provide your email and password'
            })
        }

        const user = await User.findOne({ email }).select('+password');

        if(!user || !(await bcrypt.compare(password, user.password))){
            res.status(401).json({
                status: 'fail',
                message: 'Incorrect email or password'
            })
        }

        const token = signToken(user.id);

        res.status(200).json({
            status: 'success',
            token
        })
    }catch(err){
        next(err);
    }
}