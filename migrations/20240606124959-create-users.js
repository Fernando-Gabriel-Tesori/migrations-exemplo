'use strict';

const { Query } = require("pg");
const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (QueryInterface, Sequelize)=>{
    const UsersTable = QueryInterface.createTable("users", {
      id:{
        allowNull: false,
        autoIncreent: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull:false,
        unique: true,
        type: Sequelize.STRING,
      }});

      return UsersTable;
  },

  down: async (QueryInterface)=> QueryInterface.dropTable("users"),
};