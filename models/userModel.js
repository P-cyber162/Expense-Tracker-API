const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'A name must be provided']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email !'
        },
        required: [true, 'An email must be provided']
    },
    password: {
        type: String,
        required: [true, 'A password must be provided'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirma your password']
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function(candidate, hashed) {
    return await bcrypt.compare(candidate, hashed);
}

const User = mongoose.model('User', userSchema);

module.exports = User;