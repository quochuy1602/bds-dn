const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : '';
    data.userId = !isEmpty(data.userId) ? data.userId : '';

    if(!Validator.isLength(data.title, { min: 2, max: 30 })) {
        errors.title = 'Title must be between 2 to 30 chars';
    }

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }
    if(Validator.isEmpty(data.userId)) {
        errors.userId = 'UserId field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}