import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFormBcrypt = await hasUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFormBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        // image: ,
        roleID: data.roleId,
        // positionId: DataTypes.STRING,
      });
      resolve("ok create a new user succeed!");
    } catch (error) {
      reject(error);
    }
  });
};
let hasUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(e);
    }
  });
};
let getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({ raw: true });
      console.log(users);
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
};
