const mongoose = require('mongoose');

const emailVerificationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    hashedCode: {
        type: String,
        required: true,
    },
});

const EmailVerification = mongoose.model('EmailVerification', emailVerificationSchema);

module.exports = EmailVerification;
