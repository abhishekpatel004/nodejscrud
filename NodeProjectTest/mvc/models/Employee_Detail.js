const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
    emp_name: { type: String, default: 'Neosoft' },
    emp_email: String,
    emp_password: String,
    emp_salary: Number
}, { collection: 'employee_details' });

const Employee = mongoose.model('Employee', empSchema);
module.exports = {Employee};