const getHomePage = (req, res) => {
  return res.render("homepage.ejs");
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
