import db from "../models/index";
const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};
const getTest = (req, res) => {
  return res.render("test.ejs");
};
const getAboutPage = (req, res) => {
  return res.render("aboutpage.ejs");
};
module.exports = {
  getHomePage: getHomePage,
  getTest: getTest,
  getAboutPage: getAboutPage,
};
