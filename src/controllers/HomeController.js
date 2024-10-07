import db from "../models/index";
import CRUDServices from "../services/CRUDServices";
const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};
const getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
const getAboutPage = (req, res) => {
  return res.render("aboutpage.ejs");
};
let postCRUD = async (req, res) => {
  await CRUDServices.createNewUser(req.body);
  return res.send("POST crud form sever");
};
const displayUsers = async (req, res) => {
  let data = await CRUDServices.getAllUsers();
  return res.render("displayusers.ejs", { dataUsers: data });
};
const editUser = async (req, res) => {
  let id = req.query.id;
  if (id) {
    let userData = await CRUDServices.getUserById(id);
    return res.render("editUser.ejs", { user: userData });
  } else {
    return res.send("Users not found!");
  }
};
const putUser = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDServices.updateUserData(data);
  return res.render("displayusers.ejs", { dataUsers: allUsers });
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  getAboutPage: getAboutPage,
  postCRUD: postCRUD,
  displayUsers: displayUsers,
  editUser: editUser,
  putUser: putUser,
};
