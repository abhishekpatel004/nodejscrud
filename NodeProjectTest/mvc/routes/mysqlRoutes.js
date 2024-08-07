const express = require('express');
const router = express.Router();
const { insertUser, getAllUsers, updateUserData, deleteUserById } = require('../controllers/userControllerMysql');

// Insert new users
router.post('/insertUser', async (req, res) => {
  try {
    const userData = req.body;
    if (!Array.isArray(userData)) {
      return res.status(400).json({ error: 'Invalid data format. Expected an array of users.' });
    }
    const result = await insertUser(userData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to insert users' });
  }
});

// Get all users
router.get('/getAllUsers', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Update user data
router.put('/updateUsers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const [updated] = await updateUserData(id, newData);
    if (updated) {
      const updatedUser = await getAllUsers(); // Fetch the updated user or specific user
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user data' });
  }
});

// Delete a user by ID
router.delete('/deleteUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteUserById(id);
    if (deleted) {
      res.status(204).end(); // No content
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;
