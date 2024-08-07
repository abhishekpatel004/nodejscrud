const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/mysqldb')
const User = sequelize.define('user_info', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    username: {
      type: DataTypes.STRING,
    },
    email_id: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phoneno: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    user_role: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'user_info',  // Specify the exact table name
    timestamps: false,      // Optional: Disable timestamp columns if not used
    hooks: {
        beforeUpdate: async (instance, options) => {
            console.log('Before update:', instance.toJSON());
          },
        afterUpdate: async (instance, options) => {
          console.log('After updated:', instance.toJSON());
        }
      }
  });

module.exports = { sequelize, User };