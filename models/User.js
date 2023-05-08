const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a name."
          },
          notEmpty: {
            msg: "Name cannot be empty."
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      }
    },
    {
      hooks: {
        async beforeCreate (newUserData) {
          newUserData.password = await bcrypt.hashSync(newUserData.password, 10);
          return newUserData;
        },
        // async beforeBulkCreate(users) {
        //   for (const user of users) {
        //     const {password} = user;
        //     user.password = bcrypt.hashSync(password, 10);
        //   }
        // },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "user",
    }
  );
  
  module.exports = User;
  