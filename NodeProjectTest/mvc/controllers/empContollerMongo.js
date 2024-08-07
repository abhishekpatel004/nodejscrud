const {Employee} = require('../models/Employee_Detail');

//Insert an Employee
const addNewEmployee = async (employee) => {
    const newEmployee = new Employee(employee);
    return await newEmployee.save();
};

// Find all employees
const findUsers = async () => {
    const data = await Employee.find();
    return data;
};

// Update an employee by email
const updateUser = async (email, updates) => {
    return await Employee.findOneAndUpdate(
        { emp_email: email },
        { $set: updates },
        { new: true }
    );
};

// Delete an employee by email
const deleteUser = async (email) => {
    return await Employee.deleteOne({ emp_email: email });  
};

module.exports = {addNewEmployee,findUsers,updateUser,deleteUser};