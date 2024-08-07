// insertData.js
const { User } = require('../models/User');

async function insertUser(userData) {
    // Create multiple user records
    return await User.bulkCreate(userData);
}

async function getAllUsers() {
    return await User.findAll();
}

async function updateUserData(userId,newData){
    return await User.update(newData, {
        where: { user_id: userId }
    });
}

async function deleteUserById(userId) {
   return await User.destroy({
        where: {
          user_id: userId // Primary key or unique identifier
        }
    });
}

module.exports = {insertUser,getAllUsers,updateUserData,deleteUserById};



