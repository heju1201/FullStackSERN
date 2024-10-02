import express from "express";
import HomeController from "../controllers/HomeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", HomeController.getHomePage);
  router.get("/test", HomeController.getTest);
  router.get("/about", HomeController.getAboutPage);
  return app.use("/", router);
};
module.exports = initWebRoutes;
