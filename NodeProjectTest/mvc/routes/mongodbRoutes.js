const express = require('express');
const { addNewEmployee, findUsers, updateUser, deleteUser } = require('../controllers/empContollerMongo');
const router = express.Router();

// Find all employees
router.get('/getEmployees', async (req, res) => {
  console.log("ayaa lene");
  try {
    const employees = await findUsers();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve employees' });
  }
});

// Add a new employee
router.post('/addEmployee', async (req, res) => {
  console.log('aaya');
  try {
    const employee = await addNewEmployee(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add employee' });
  }
});

// Update an employee by email
router.put('/updateEmployeeDetail/:email', async (req, res) => {
  try {
    const updatedEmployee = await updateUser(req.params.email, req.body);
    if (updatedEmployee) {
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update employee' });
  }
});

// Delete an employee by email
router.delete('deteleteEmployeeDetails/:email', async (req, res) => {
  try {
    const result = await deleteUser(req.params.email);
    if (result.deletedCount > 0) {
      res.status(204).end(); // No content
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete employee' });
  }
});

module.exports = router;
