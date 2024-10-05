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
  let message = await CRUDServices.createNewUser(req.body);
  console.log(message);
  return res.send("POST crud form sever");
};
const displayUsers = async (req, res) => {
  let data = await CRUDServices.getAllUsers();
  return res.render("displayusers.ejs", { dataUsers: data });
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  getAboutPage: getAboutPage,
  postCRUD: postCRUD,
  displayUsers: displayUsers,
};
